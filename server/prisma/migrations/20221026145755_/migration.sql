/*
  Warnings:

  - You are about to drop the column `String` on the `platillosoningredientes` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `PlatillosOnIngredientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `platillosoningredientes` DROP COLUMN `String`,
    ADD COLUMN `cantidad` VARCHAR(191) NOT NULL;
