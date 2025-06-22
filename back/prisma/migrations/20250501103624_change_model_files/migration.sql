/*
  Warnings:

  - You are about to drop the column `aboutId` on the `Files` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Files` table. All the data in the column will be lost.
  - Added the required column `file_url` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_aboutId_fkey";

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "aboutId",
DROP COLUMN "url",
ADD COLUMN     "entityId" INTEGER,
ADD COLUMN     "entityType" TEXT,
ADD COLUMN     "file_url" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Files_entityType_entityId_idx" ON "Files"("entityType", "entityId");
