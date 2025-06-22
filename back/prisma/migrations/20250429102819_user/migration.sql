-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT,
    "avatar_path" TEXT NOT NULL DEFAULT '/uploads/default-avatar.png',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
