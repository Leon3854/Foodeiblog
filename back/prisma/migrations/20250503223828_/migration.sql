/*
  Warnings:

  - You are about to drop the `about` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "about";

-- CreateTable
CREATE TABLE "About" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "text" TEXT,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);
