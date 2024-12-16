/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "otherName" TEXT,
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "token" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
