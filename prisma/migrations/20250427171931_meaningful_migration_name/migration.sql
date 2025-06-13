/*
  Warnings:

  - You are about to drop the column `type` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `tableDataId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ActivityData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuarterlyType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TableData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActivityData" DROP CONSTRAINT "ActivityData_activityId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityData" DROP CONSTRAINT "ActivityData_quarterlyTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityData" DROP CONSTRAINT "ActivityData_yearId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tableDataId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "type",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tableDataId";

-- DropTable
DROP TABLE "ActivityData";

-- DropTable
DROP TABLE "QuarterlyType";

-- DropTable
DROP TABLE "TableData";

-- DropTable
DROP TABLE "Year";

-- DropEnum
DROP TYPE "ActivityType";

-- DropEnum
DROP TYPE "MonthType";
