/*
  Warnings:

  - You are about to drop the column `token` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the column `grupos_id` on the `module` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "module" DROP CONSTRAINT "module_grupos_id_fkey";

-- AlterTable
ALTER TABLE "auth" DROP COLUMN "token";

-- AlterTable
ALTER TABLE "module" DROP COLUMN "grupos_id",
ADD COLUMN     "group_id" INTEGER;

-- CreateTable
CREATE TABLE "patient" (
    "patient_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    " email" TEXT NOT NULL,
    "sex" TEXT,
    "document_type" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT,
    "profile_photo" TEXT,
    "online" BOOLEAN,
    "deleted" BOOLEAN DEFAULT false,
    "password" TEXT,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "patient_pkey" PRIMARY KEY ("patient_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_ email_key" ON "patient"(" email");

-- CreateIndex
CREATE UNIQUE INDEX "patient_dni_key" ON "patient"("dni");

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group_of_modules"("group_id") ON DELETE SET NULL ON UPDATE CASCADE;
