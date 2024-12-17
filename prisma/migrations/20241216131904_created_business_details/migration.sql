/*
  Warnings:

  - Added the required column `cusomterId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "cusomterId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "residential_addresses" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "residential_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_details" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "businessName" TEXT,
    "industry" TEXT,
    "size" TEXT,
    "income" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipcode" TEXT,
    "landmark" TEXT,
    "lga" TEXT,
    "directorFirstName" TEXT,
    "directorLastName" TEXT,
    "directorEmail" TEXT,
    "directorPhone" TEXT,
    "directorIdType" TEXT,
    "directorIdNumber" TEXT,
    "directorIdImage" TEXT,
    "cacNumber" TEXT,
    "cacdoc" TEXT,
    "moiDoc" TEXT,
    "scumlDoc" TEXT,
    "utilityBill" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "residential_addresses" ADD CONSTRAINT "residential_addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_details" ADD CONSTRAINT "business_details_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
