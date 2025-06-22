-- CreateTable
CREATE TABLE "About" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "text" TEXT,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);
