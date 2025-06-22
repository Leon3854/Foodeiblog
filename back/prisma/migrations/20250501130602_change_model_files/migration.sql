/*
  Warnings:

  - The `entityType` column on the `Files` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('ABOUT');

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "entityType",
ADD COLUMN     "entityType" "EntityType";

-- CreateIndex
CREATE INDEX "Files_entityType_entityId_idx" ON "Files"("entityType", "entityId");
