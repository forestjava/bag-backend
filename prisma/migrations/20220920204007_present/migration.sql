/*
  Warnings:

  - You are about to drop the column `typeReferencePresentId` on the `Attribute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_typeReferencePresentId_fkey";

-- AlterTable
ALTER TABLE "Attribute" DROP COLUMN "typeReferencePresentId",
ADD COLUMN     "present" BOOLEAN;
