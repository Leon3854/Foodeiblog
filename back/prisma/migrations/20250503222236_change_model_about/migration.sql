/*
  Warnings:

  - You are about to drop the `About` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "About";

-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "text" TEXT,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);
