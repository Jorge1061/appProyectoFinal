/*
  Warnings:

  - You are about to drop the column `tarjeta` on the `factura` table. All the data in the column will be lost.
  - The primary key for the `mesa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `mesa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `mesaId` on the `pedido` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `opcionPagoId` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo` to the `Mesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Mesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoId` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `Pedido_mesaId_fkey`;

-- AlterTable
ALTER TABLE `factura` DROP COLUMN `tarjeta`,
    ADD COLUMN `opcionPagoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `mesa` DROP PRIMARY KEY,
    ADD COLUMN `codigo` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` BOOLEAN NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pedido` ADD COLUMN `estadoId` INTEGER NOT NULL,
    MODIFY `mesaId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `EstadoPedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OpcionPago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_mesaId_fkey` FOREIGN KEY (`mesaId`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `EstadoPedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_opcionPagoId_fkey` FOREIGN KEY (`opcionPagoId`) REFERENCES `OpcionPago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
