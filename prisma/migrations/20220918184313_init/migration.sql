-- CreateEnum
CREATE TYPE "Type" AS ENUM ('String', 'Number', 'Boolean', 'Datetime', 'Reference', 'ReferenceList');

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "itemName" TEXT NOT NULL,
    "listName" TEXT NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" SERIAL NOT NULL,
    "entityId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "typeReferenceId" INTEGER,
    "typeReferencePresentId" INTEGER,
    "typeReferenceRelation" TEXT,
    "required" BOOLEAN,
    "placeholder" TEXT,
    "list" BOOLEAN,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_typeReferenceId_fkey" FOREIGN KEY ("typeReferenceId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_typeReferencePresentId_fkey" FOREIGN KEY ("typeReferencePresentId") REFERENCES "Attribute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
