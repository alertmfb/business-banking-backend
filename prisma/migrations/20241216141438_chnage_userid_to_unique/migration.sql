/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `business_details` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `kybs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `residential_addresses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "business_details_userId_key" ON "business_details"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "kybs_userId_key" ON "kybs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "residential_addresses_userId_key" ON "residential_addresses"("userId");
