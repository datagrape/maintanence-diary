# New Services and Routes - Full Implementation Notes

## 1) What Was Added

### New API route groups mounted in `src/app.js`
- `/api/forgot-password`
- `/api/location-request`

### New route files
- `src/routes/forgotPasswordRoutes.js`
- `src/routes/locationRequestRoutes.js`

### New controllers
- `src/controllers/forgotPasswordController.js`
- `src/controllers/locationRequestController.js`

### New services
- `src/services/forgotPasswordService.js`
- `src/services/locationRequestService.js`
- `src/services/notificationService.js`

## 2) Forgot Password Flow (Dedicated)

Base path: `/api/forgot-password`

### A. `POST /send-otp`
Purpose:
- Send password reset OTP to user email.

Input body:
- `email` (required)

Logic:
- Normalize and validate email.
- Find user case-insensitively.
- Validate user is active (`isDisabled = false`).
- Generate 6-digit OTP.
- Set OTP expiry (10 minutes).
- Save `otp` and `otpExpiration` on `User`.
- Send OTP by email (nodemailer with `EMAIL_USER`/`EMAIL_PASS`).

Response:
- `200` with success message.

### B. `POST /verify-otp`
Purpose:
- Verify OTP and issue reset token.

Input body:
- `email` (required)
- `otp` (required)

Logic:
- Validate user exists and is active.
- Verify OTP value and expiry.
- Generate reset token (`crypto.randomBytes`).
- Set reset token expiry (10 minutes).
- Save:
  - `passwordResetToken`
  - `passwordResetTokenExpiresAt`

Response:
- `200` with:
  - `resetToken`
  - `expiresAt`

### C. `POST /reset`
Purpose:
- Reset password using reset token.

Input body:
- `email` (required)
- `newPassword` (required, min length 8)
- `resetToken` (required)

Logic:
- Validate user exists and is active.
- Validate reset token and expiry.
- Hash `newPassword` with bcrypt.
- Update user password.
- Clear temporary reset/OTP fields:
  - `otp`
  - `otpExpiration`
  - `passwordResetToken`
  - `passwordResetTokenExpiresAt`

Response:
- `200` with success message.

## 3) Location Request Response Flow

Base path: `/api/location-request`

### `POST /respond`
Purpose:
- Save user response for location request.

Input body:
- `requestId` (required)
- `adminId` (required)
- `userId` (required)
- `status` (required: `accepted` or `denied`)
- `latitude` (optional number)
- `longitude` (optional number)
- `accuracy` (optional number)
- `notes` (optional string)

Logic:
- Validate required fields.
- Validate status enum.
- Validate both `adminId` and `userId` exist and are active.
- Normalize numeric fields.
- Insert row in `LocationRequestResponse` with `respondedAt = now`.

Response:
- `201` with stored response object.

## 4) Notification Helper (FCM Payload Shape)

File: `src/services/notificationService.js`

Implemented helpers:
- `createLocationRequestPayload({ requestId, adminId, userId })`
- `buildFcmMessage({ deviceToken, requestId, adminId, userId })`
- `generateResetToken()`

Payload shape used:
```json
{
  "data": {
    "type": "LOCATION_REQUEST",
    "requestId": "request-id",
    "adminId": "admin-id",
    "userId": "user-id"
  },
  "notification": {
    "title": "Location requested",
    "body": "Admin is asking for your location"
  }
}
```

## 5) Link Data + Device Token Logic (Current Behavior)

### Endpoint where token is stored
- `GET /api/link-data/check-link-data`

### Header used
- `device-token` (or `x-device-token`)

### Service behavior
In `checkLinkAccessed(link, { deviceToken })`:
- Find link by `link`.
- If missing/expired/already accessed (`isAccessed == 1`), return not found/expired message.
- If valid and `device-token` provided:
  - Upsert token into `DeviceToken` table.
  - Map token to `taskId` from the matched link.
  - Mark token active, platform `unknown`.
- Update link:
  - `isAccessed = 1`

### Important
- `GET /api/link-data/get-link-data` does **not** store device token anymore.

## 6) Prisma Schema Changes

File: `prisma/schema.prisma`

### `User` model additions
- `passwordResetToken String?`
- `passwordResetTokenExpiresAt DateTime?`
- relations for:
  - `deviceTokens`
  - `locationResponsesAsAdmin`
  - `locationResponsesAsUser`

### `LocationRequestResponse` model added
Fields:
- `id`, `requestId`, `adminId`, `userId`, `status`
- optional `latitude`, `longitude`, `accuracy`, `notes`
- `respondedAt`, `createdAt`, `updatedAt`
- indexes on `requestId`, `userId`, `adminId`

### `DeviceToken` model added
Fields:
- `id`
- `token` (unique)
- `taskId` (optional, indexed)
- `userId` (optional)
- `platform` (default `"unknown"`)
- `isActive` (default `true`)
- timestamps

## 7) Postman Collection Updates

File:
- `task-diary-services.postman_collection.json`

Implemented updates:
- Added folders:
  - `Forgot Password Service`
  - `Location Request Service`
- Link data requests clarified:
  - `GET Link Data (No Device Token)`
  - `GET Check Link Data Access (Stores Device Token)`
- `GET Check Link Data Access` includes header:
  - `device-token: sample-device-token`
- Collection base URL:
  - `http://localhost:3001`

## 8) DB/Run Commands Used for This Setup

For restricted DB user (no shadow DB permission):
```powershell
.\node_modules\.bin\prisma.cmd db push
.\node_modules\.bin\prisma.cmd generate
```

Run server:
```powershell
npm start
```

## 9) Files Touched (Functional Scope)

- `src/app.js`
- `src/routes/forgotPasswordRoutes.js`
- `src/routes/locationRequestRoutes.js`
- `src/controllers/forgotPasswordController.js`
- `src/controllers/locationRequestController.js`
- `src/controllers/linkDataUpdateController.js`
- `src/services/forgotPasswordService.js`
- `src/services/locationRequestService.js`
- `src/services/notificationService.js`
- `src/services/linkDataUpdateService.js`
- `prisma/schema.prisma`
- `task-diary-services.postman_collection.json`
