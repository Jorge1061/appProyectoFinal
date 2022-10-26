-- CreateTable
CREATE TABLE `Ingrediente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_IngredienteToPlatillo` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_IngredienteToPlatillo_AB_unique`(`A`, `B`),
    INDEX `_IngredienteToPlatillo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_IngredienteToPlatillo` ADD CONSTRAINT `_IngredienteToPlatillo_A_fkey` FOREIGN KEY (`A`) REFERENCES `Ingrediente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IngredienteToPlatillo` ADD CONSTRAINT `_IngredienteToPlatillo_B_fkey` FOREIGN KEY (`B`) REFERENCES `Platillo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
