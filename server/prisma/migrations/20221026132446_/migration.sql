/*
  Warnings:

  - You are about to drop the column `cantidad` on the `platillosoningredientes` table. All the data in the column will be lost.
  - Added the required column `String` to the `PlatillosOnIngredientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `platillosoningredientes` DROP COLUMN `cantidad`,
    ADD COLUMN `String` INTEGER NOT NULL;
