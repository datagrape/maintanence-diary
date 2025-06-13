/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `subscriptionType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Superadmin', 'Admin', 'User');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('Free', 'Professional_monthly', 'Professional_yearly', 'Premium_monthly', 'Premium_yearly');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('Monthly', 'Quarterly', 'Yearly', 'admin');

-- CreateEnum
CREATE TYPE "MonthType" AS ENUM ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ADD COLUMN     "cancellationReason" TEXT,
ADD COLUMN     "lastPaymentDate" TIMESTAMP(3),
ADD COLUMN     "link" TEXT,
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpiration" TIMESTAMP(3),
ADD COLUMN     "password" TEXT,
ADD COLUMN     "subscriptionType" "SubscriptionType" NOT NULL,
ADD COLUMN     "tableDataId" INTEGER,
ADD COLUMN     "userType" "UserType" NOT NULL;

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ActivityType" NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuarterlyType" (
    "id" SERIAL NOT NULL,
    "startMonth" "MonthType" NOT NULL,
    "endMonth" "MonthType" NOT NULL,

    CONSTRAINT "QuarterlyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityData" (
    "id" SERIAL NOT NULL,
    "taskName" TEXT NOT NULL,
    "type" "ActivityType" NOT NULL,
    "yearId" INTEGER NOT NULL,
    "month" "MonthType",
    "dueDate" TIMESTAMP(3) NOT NULL,
    "activityId" INTEGER NOT NULL,
    "quarterlyTypeId" INTEGER,

    CONSTRAINT "ActivityData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableData" (
    "id" SERIAL NOT NULL,
    "key" TEXT,
    "companyName" TEXT,
    "activityName" TEXT,
    "year" INTEGER,
    "month" "MonthType",
    "selectedActivityType" "ActivityType" NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "TableData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "razorpayCustomerId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "autoRenew" BOOLEAN NOT NULL DEFAULT true,
    "renewalCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "owner" TEXT,
    "recievers" JSONB,
    "data" JSONB NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ad" (
    "id" SERIAL NOT NULL,
    "contentUrl" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Link_link_key" ON "Link"("link");

-- AddForeignKey
ALTER TABLE "ActivityData" ADD CONSTRAINT "ActivityData_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityData" ADD CONSTRAINT "ActivityData_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityData" ADD CONSTRAINT "ActivityData_quarterlyTypeId_fkey" FOREIGN KEY ("quarterlyTypeId") REFERENCES "QuarterlyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tableDataId_fkey" FOREIGN KEY ("tableDataId") REFERENCES "TableData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
