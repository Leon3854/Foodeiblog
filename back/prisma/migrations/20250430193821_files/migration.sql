-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "aboutId" INTEGER,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE SET NULL ON UPDATE CASCADE;
