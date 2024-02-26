/*
  Warnings:

  - You are about to drop the column `Txid` on the `price_cert` table. All the data in the column will be lost.
  - You are about to alter the column `Date_int` on the `price_cert` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `price_cert` DROP COLUMN `Txid`,
    ADD COLUMN `CreatePixDate` DATETIME NULL,
    ADD COLUMN `PixStatus` VARCHAR(100) NULL,
    ADD COLUMN `TxidBoleto` TEXT NULL,
    ADD COLUMN `TxidCartao` TEXT NULL,
    ADD COLUMN `TxidPix` TEXT NULL,
    MODIFY `Date_int` DATETIME NULL;
