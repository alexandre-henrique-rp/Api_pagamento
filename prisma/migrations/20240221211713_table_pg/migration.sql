/*
  Warnings:

  - You are about to drop the column `ConclusionPixDate` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `CreatePixDate` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `Datepagmento` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `emailPix` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `id_ret_soluti` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `imgCode` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `linkpix` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `msg_retorno` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `qrcodeLink` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `smspg` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `telPix` on the `fcweb` table. All the data in the column will be lost.
  - You are about to drop the column `txid` on the `fcweb` table. All the data in the column will be lost.
  - The primary key for the `price_cert` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cert` on the `price_cert` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `price_cert` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `price_cert` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Uuid]` on the table `price_cert` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Status_pg` to the `price_cert` table without a default value. This is not possible if the table is not empty.
  - The required column `Uuid` was added to the `price_cert` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `fcwebId` to the `price_cert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fcweb` DROP COLUMN `ConclusionPixDate`,
    DROP COLUMN `CreatePixDate`,
    DROP COLUMN `Datepagmento`,
    DROP COLUMN `emailPix`,
    DROP COLUMN `id_ret_soluti`,
    DROP COLUMN `imgCode`,
    DROP COLUMN `linkpix`,
    DROP COLUMN `msg_retorno`,
    DROP COLUMN `qrcodeLink`,
    DROP COLUMN `smspg`,
    DROP COLUMN `telPix`,
    DROP COLUMN `txid`;

-- AlterTable
ALTER TABLE `price_cert` DROP PRIMARY KEY,
    DROP COLUMN `cert`,
    DROP COLUMN `id`,
    DROP COLUMN `price`,
    ADD COLUMN `Cliente_acess` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `Date_int` DATETIME NULL,
    ADD COLUMN `Status_pg` VARCHAR(100) NOT NULL,
    ADD COLUMN `Uuid` VARCHAR(191) NOT NULL,
    ADD COLUMN `fcwebId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`Uuid`);

-- CreateIndex
CREATE UNIQUE INDEX `price_cert_Uuid_key` ON `price_cert`(`Uuid`);
