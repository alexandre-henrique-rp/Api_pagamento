/*
  Warnings:

  - You are about to drop the column `fcwebId` on the `price_cert` table. All the data in the column will be lost.
  - You are about to alter the column `Date_int` on the `price_cert` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `FcwebId` to the `price_cert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `price_cert` DROP COLUMN `fcwebId`,
    ADD COLUMN `BarCode` VARCHAR(100) NULL,
    ADD COLUMN `Card_Adm` VARCHAR(20) NULL,
    ADD COLUMN `Date_venc` DATE NULL,
    ADD COLUMN `FcwebId` INTEGER NOT NULL,
    ADD COLUMN `LinkBoleto` MEDIUMTEXT NULL,
    ADD COLUMN `LinkBoletoPdf` MEDIUMTEXT NULL,
    ADD COLUMN `LinkBolix` MEDIUMTEXT NULL,
    ADD COLUMN `Parcelas` VARCHAR(3) NULL,
    ADD COLUMN `QrBase64` LONGTEXT NULL,
    ADD COLUMN `QrLink` TEXT NULL,
    ADD COLUMN `Txid` TEXT NULL,
    ADD COLUMN `UrlPg` MEDIUMTEXT NULL,
    ADD COLUMN `payment_token` MEDIUMTEXT NULL,
    ADD COLUMN `payment_url` MEDIUMTEXT NULL,
    MODIFY `Date_int` DATETIME NULL;

-- AddForeignKey
ALTER TABLE `price_cert` ADD CONSTRAINT `price_cert_FcwebId_fkey` FOREIGN KEY (`FcwebId`) REFERENCES `fcweb`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
