/*
  Warnings:

  - You are about to drop the column `estado` on the `mesa` table. All the data in the column will be lost.
  - You are about to drop the `estadopedido` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `estadoId` to the `Mesa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `Pedido_estadoId_fkey`;

-- AlterTable
ALTER TABLE `mesa` DROP COLUMN `estado`,
    ADD COLUMN `estadoId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `estadopedido`;

-- CreateTable
CREATE TABLE `EstadoPedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstadoMesas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `EstadoPedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mesa` ADD CONSTRAINT `Mesa_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `EstadoMesas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
