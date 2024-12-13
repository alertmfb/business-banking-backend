-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "kybs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nationalityStatus" BOOLEAN NOT NULL DEFAULT false,
    "faceVerifyStatus" BOOLEAN NOT NULL DEFAULT false,
    "ninStatus" BOOLEAN NOT NULL DEFAULT false,
    "tinStatus" BOOLEAN NOT NULL DEFAULT false,
    "bvnStatus" BOOLEAN NOT NULL DEFAULT false,
    "residentialAddressStatus" BOOLEAN NOT NULL DEFAULT false,
    "businessAddressStatus" BOOLEAN NOT NULL DEFAULT false,
    "businessDetailsStatus" BOOLEAN NOT NULL DEFAULT false,
    "businessDocumentStatus" BOOLEAN NOT NULL DEFAULT false,
    "attestation" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kybs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kybs" ADD CONSTRAINT "kybs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
