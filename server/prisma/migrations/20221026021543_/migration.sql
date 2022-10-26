/*
  Warnings:

  - Added the required column `nombre` to the `Platillo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicar` to the `Platillo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `platillo` ADD COLUMN `nombre` VARCHAR(191) NOT NULL,
    ADD COLUMN `publicar` BOOLEAN NOT NULL;
