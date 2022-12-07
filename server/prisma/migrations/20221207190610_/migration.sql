/*
  Warnings:

  - Added the required column `numMesa` to the `Mesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicial` to the `Restaurante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mesa` ADD COLUMN `numMesa` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `restaurante` ADD COLUMN `inicial` VARCHAR(191) NOT NULL;
