/*
  Warnings:

  - You are about to drop the column `entityId` on the `Files` table. All the data in the column will be lost.
  - You are about to drop the column `entityType` on the `Files` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Files_entityType_entityId_idx";

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "entityId",
DROP COLUMN "entityType";
