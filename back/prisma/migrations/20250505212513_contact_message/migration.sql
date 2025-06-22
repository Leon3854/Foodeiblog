-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "website" VARCHAR(100) NOT NULL,
    "message" TEXT NOT NULL,
    "phone" VARCHAR(20),
    "status" TEXT NOT NULL DEFAULT 'new',
    "adminNotes" TEXT,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);
