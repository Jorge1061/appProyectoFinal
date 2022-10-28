-- DropForeignKey
ALTER TABLE `platillo` DROP FOREIGN KEY `Platillo_categoriaId_fkey`;

-- CreateTable
CREATE TABLE `_CategoriaToPlatillo` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoriaToPlatillo_AB_unique`(`A`, `B`),
    INDEX `_CategoriaToPlatillo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CategoriaToPlatillo` ADD CONSTRAINT `_CategoriaToPlatillo_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToPlatillo` ADD CONSTRAINT `_CategoriaToPlatillo_B_fkey` FOREIGN KEY (`B`) REFERENCES `Platillo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
