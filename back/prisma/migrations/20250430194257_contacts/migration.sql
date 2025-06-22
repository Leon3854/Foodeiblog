-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "text" TEXT,
    "name" TEXT,
    "email" TEXT,
    "website" TEXT,
    "message" TEXT,
    "phone" TEXT,
    "address" TEXT,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_email_key" ON "Contacts"("email");
