/*
  Warnings:

  - You are about to drop the `ingrediente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `platillosoningredientes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ingredientes` to the `Platillo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `platillosoningredientes` DROP FOREIGN KEY `PlatillosOnIngredientes_ingredienteId_fkey`;

-- DropForeignKey
ALTER TABLE `platillosoningredientes` DROP FOREIGN KEY `PlatillosOnIngredientes_platilloId_fkey`;

-- AlterTable
ALTER TABLE `platillo` ADD COLUMN `ingredientes` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `ingrediente`;

-- DropTable
DROP TABLE `platillosoningredientes`;
