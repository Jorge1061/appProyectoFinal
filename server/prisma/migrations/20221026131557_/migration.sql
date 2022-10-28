/*
  Warnings:

  - You are about to drop the `_ingredientetoplatillo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ingredientetoplatillo` DROP FOREIGN KEY `_IngredienteToPlatillo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ingredientetoplatillo` DROP FOREIGN KEY `_IngredienteToPlatillo_B_fkey`;

-- DropTable
DROP TABLE `_ingredientetoplatillo`;

-- CreateTable
CREATE TABLE `PlatillosOnIngredientes` (
    `platilloId` INTEGER NOT NULL,
    `ingredienteId` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`platilloId`, `ingredienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlatillosOnIngredientes` ADD CONSTRAINT `PlatillosOnIngredientes_platilloId_fkey` FOREIGN KEY (`platilloId`) REFERENCES `Platillo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlatillosOnIngredientes` ADD CONSTRAINT `PlatillosOnIngredientes_ingredienteId_fkey` FOREIGN KEY (`ingredienteId`) REFERENCES `Ingrediente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
