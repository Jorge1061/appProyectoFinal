/*
  Warnings:

  - You are about to drop the `_categoriatoplatillo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categoriatoplatillo` DROP FOREIGN KEY `_CategoriaToPlatillo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categoriatoplatillo` DROP FOREIGN KEY `_CategoriaToPlatillo_B_fkey`;

-- DropIndex
DROP INDEX `Platillo_categoriaId_fkey` ON `platillo`;

-- DropTable
DROP TABLE `_categoriatoplatillo`;

-- AddForeignKey
ALTER TABLE `Platillo` ADD CONSTRAINT `Platillo_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
