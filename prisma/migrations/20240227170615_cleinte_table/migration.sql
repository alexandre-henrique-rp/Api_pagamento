/*
  Warnings:

  - You are about to alter the column `Date_int` on the `price_cert` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `CreatePixDate` on the `price_cert` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `price_cert` MODIFY `Date_int` DATETIME NULL,
    MODIFY `CreatePixDate` DATETIME NULL;
