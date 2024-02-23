-- CreateTable
CREATE TABLE `AGRV` (
    `idagrv` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NULL,
    `cpf` VARCHAR(20) NULL,
    `nascimento` DATE NULL,
    `rg` VARCHAR(20) NULL,
    `linkcnh` TEXT NULL,
    `linkfotoperfil` TEXT NULL,
    `logradouro` TEXT NULL,
    `numero` TEXT NULL,
    `complemento` TEXT NULL,
    `cep` TEXT NULL,
    `municipio` TEXT NULL,
    `codmunicipio` TEXT NULL,
    `uf` TEXT NULL,
    `whatsapp` TEXT NULL,
    `celular` TEXT NULL,
    `fixo` TEXT NULL,
    `email` TEXT NULL,
    `email2` TEXT NULL,
    `permissaoacesso` TEXT NULL,
    `senha` TEXT NULL,
    `chavepix` TEXT NULL,
    `nomebanco` TEXT NULL,
    `numerobanco` TEXT NULL,
    `numeroagencia` TEXT NULL,
    `numeroconta` TEXT NULL,
    `tipocontabanco` TEXT NULL,
    `nomepolo` TEXT NULL,
    `numeropolo` INTEGER NULL,
    `linklogopolo` TEXT NULL,
    `municipiopolo` TEXT NULL,
    `ufpolo` TEXT NULL,
    `a1pj_12m` INTEGER NULL,
    `a3pj_36m` INTEGER NULL,
    `a1pf_12m` INTEGER NULL,
    `a3pf_36m` INTEGER NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `tipopix` TEXT NULL,
    `bairro` TEXT NULL,
    `painel_agrv` INTEGER NULL,
    `obs` TEXT NULL,

    PRIMARY KEY (`idagrv`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calendario` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATE NULL,
    `dia_semana` VARCHAR(50) NULL,
    `feriado` VARCHAR(50) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teste_conecxao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `msg` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UNICA` (
    `c_unico` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(11) NOT NULL,
    `hora` VARCHAR(11) NOT NULL,
    `tipocd` TEXT NOT NULL,
    `referencia` VARCHAR(20) NOT NULL,
    `unidade` VARCHAR(20) NOT NULL,
    `nome` VARCHAR(200) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `razaosocial` VARCHAR(200) NOT NULL,
    `cnpj` VARCHAR(20) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `cidade` VARCHAR(50) NOT NULL,

    INDEX `c_unico`(`c_unico`),
    PRIMARY KEY (`c_unico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` CHAR(36) NOT NULL DEFAULT '',
    `type` VARCHAR(255) NOT NULL,
    `provider` VARCHAR(255) NOT NULL,
    `provider_account_id` VARCHAR(255) NOT NULL,
    `refresh_token` VARCHAR(255) NULL,
    `access_token` VARCHAR(255) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(255) NULL,
    `scope` VARCHAR(255) NULL,
    `id_token` VARCHAR(255) NULL,
    `session_state` VARCHAR(255) NULL,
    `user_id` CHAR(36) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `arquivo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpfcnpj` TEXT NOT NULL,
    `novo_nome` TEXT NOT NULL,
    `nomearquivo` TEXT NOT NULL,
    `dtUParq` DATE NOT NULL,
    `novo_nome_recibo` TEXT NOT NULL,
    `dtUPrec` DATE NOT NULL,
    `vencimento` DATE NOT NULL,
    `valor` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blocodenotas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroDAlinha` TINYINT NOT NULL,
    `cor` TEXT NOT NULL,
    `atendimento` TEXT NOT NULL,
    `titulo` TEXT NOT NULL,
    `anotacoes` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `boleto` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `referencia` TEXT NOT NULL,
    `unidade` INTEGER NOT NULL,
    `idfcw` TEXT NOT NULL,
    `fouj` TEXT NOT NULL,
    `tipocd` TEXT NOT NULL,
    `vectoboleto` TEXT NOT NULL,
    `valorcd` TEXT NOT NULL,
    `cliente` TEXT NOT NULL,
    `cpfcnpj` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `endereco` TEXT NOT NULL,
    `nrua` TEXT NOT NULL,
    `bairro` TEXT NOT NULL,
    `cidade` TEXT NOT NULL,
    `uf` TEXT NOT NULL,
    `cep` TEXT NOT NULL,
    `nossonumero` TEXT NOT NULL,
    `linhadigitavel` TEXT NOT NULL,
    `codigobarras` TEXT NOT NULL,
    `datahoje` TEXT NOT NULL,
    `remessa` TEXT NOT NULL,
    `baixa` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `boleto_efi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_efi` VARCHAR(100) NULL,
    `nome` VARCHAR(100) NULL,
    `produto` VARCHAR(100) NULL,
    `vencimento` DATE NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `barcode` TEXT NULL,
    `pix_qrcode` TEXT NULL,
    `link` VARCHAR(100) NULL,
    `boleto` VARCHAR(100) NULL,
    `boleto_pdf` VARCHAR(100) NULL,
    `pg_id` VARCHAR(100) NULL,
    `status_pg` VARCHAR(100) NULL,
    `pix_link` TEXT NULL,
    `status_efi` VARCHAR(100) NULL,
    `type` VARCHAR(100) NULL,
    `doc` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientesNFE` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `CPF` TEXT NULL,
    `CNPJ` TEXT NULL,
    `Cliente` VARCHAR(50) NULL,
    `RAZAO` VARCHAR(50) NULL,
    `Vencimento` DATE NULL,
    `Valor` INTEGER NULL,
    `LINK` VARCHAR(50) NULL,
    `TEL1` TEXT NULL,
    `TEL2` TEXT NULL,
    `STATUS` INTEGER NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `email` VARCHAR(100) NULL,

    INDEX `clientesNFE_ID_IDX`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cupons_desconto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cupom` VARCHAR(50) NOT NULL,
    `porcentagem_desconto` DOUBLE NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `criado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `erp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NULL,
    `fantasia` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `end` VARCHAR(100) NULL,
    `bairro` VARCHAR(100) NULL,
    `numero` INTEGER NULL,
    `cidade` VARCHAR(100) NULL,
    `pais` VARCHAR(100) NULL,
    `Ie` VARCHAR(100) NULL,
    `tel` VARCHAR(100) NULL,
    `whatsapp` VARCHAR(100) NOT NULL,
    `a1pf` INTEGER NOT NULL,
    `a3pf` INTEGER NULL,
    `a1pj` INTEGER NOT NULL,
    `a3pj` INTEGER NULL,
    `status` INTEGER NOT NULL,
    `regime` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `cnpj` VARCHAR(100) NULL,
    `uf` VARCHAR(100) NULL,
    `simples` VARCHAR(100) NULL,
    `unidade` VARCHAR(100) NULL,
    `authorization` VARCHAR(100) NULL,
    `repasse` INTEGER NULL,

    UNIQUE INDEX `erp_id_IDX`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `erp_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `clienteId` INTEGER NULL,
    `clienteTel` VARCHAR(100) NULL,
    `clienteName` VARCHAR(100) NULL,
    `clienteValor` VARCHAR(100) NULL,
    `updatedAt` DATETIME(0) NULL,
    `error` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fcweb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `s_alerta` TEXT NULL,
    `referencia` TEXT NULL,
    `id_boleto` TEXT NULL,
    `id_cancelar_bol_rem` TEXT NULL,
    `unidade` TEXT NULL,
    `responsavel` TEXT NULL,
    `criou_fc` TEXT NOT NULL,
    `andamento` TEXT NULL,
    `prioridade` TEXT NULL,
    `solicitacao` TEXT NULL,
    `venda` TEXT NULL,
    `cpf` TEXT NULL,
    `cnpj` TEXT NULL,
    `nome` TEXT NULL,
    `razaosocial` TEXT NULL,
    `vectoboleto` DATE NULL,
    `unico` TEXT NULL,
    `contador` TEXT NULL,
    `obscont` TEXT NULL,
    `comissaoparceiro` FLOAT NULL,
    `scp` VARCHAR(10) NULL,
    `tipocd` TEXT NULL,
    `valorcd` TEXT NULL,
    `custocd` TEXT NULL,
    `custoCdpar` TEXT NULL,
    `estatos_pgto` TEXT NULL,
    `pgto_efi` VARCHAR(100) NOT NULL,
    `formapgto` TEXT NULL,
    `vouchersoluti` TEXT NULL,
    `ct_parcela` TEXT NULL,
    `telefone` TEXT NULL,
    `telefone2` TEXT NULL,
    `email` TEXT NULL,
    `dtnascimento` TEXT NULL,
    `rg` TEXT NULL,
    `cei` TEXT NULL,
    `endereco` TEXT NULL,
    `nrua` TEXT NULL,
    `bairro` TEXT NULL,
    `complemento` TEXT NULL,
    `cep` TEXT NULL,
    `uf` TEXT NULL,
    `im` INTEGER NOT NULL,
    `cidade` TEXT NULL,
    `observacao` LONGTEXT NULL,
    `vctoCD` DATE NULL,
    `historico` LONGTEXT NULL,
    `arquivo` VARCHAR(100) NULL,
    `nomearquivo` VARCHAR(100) NULL,
    `obsrenovacao` TEXT NULL,
    `dt_aprovacao` DATE NULL,
    `comicao` FLOAT NULL,
    `validacao` TEXT NULL,
    `nfe` TEXT NULL,
    `urlnota` TEXT NULL,
    `id_fcw_soluti` VARCHAR(11) NULL,
    `dt_agenda` DATE NULL,
    `hr_agenda` TIME(0) NULL,
    `obs_agenda` TEXT NULL,
    `reg_cnh` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `smspg` INTEGER NULL,
    `id_ret_soluti` INTEGER NOT NULL,
    `txid` VARCHAR(100) NULL,
    `qrcodeLink` TEXT NULL,
    `CreatePixDate` DATETIME(0) NULL,
    `ConclusionPixDate` DATETIME(0) NULL,
    `telPix` VARCHAR(100) NULL,
    `emailPix` VARCHAR(100) NULL,
    `imgCode` TEXT NULL,
    `Datepagmento` DATETIME(0) NULL,
    `msg_retorno` TEXT NULL,
    `linkpix` TEXT NULL,

    INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `telefone_1` VARCHAR(20) NOT NULL,
    `telefone_2` VARCHAR(20) NULL,
    `email` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(30) NOT NULL,
    `cnpj` VARCHAR(30) NULL,
    `data_nascimento` VARCHAR(15) NOT NULL,
    `razao_social` VARCHAR(255) NULL,
    `tipo_lead` VARCHAR(30) NOT NULL,
    `certificado` VARCHAR(50) NOT NULL,
    `cupom_desconto` VARCHAR(20) NULL,
    `valor` DECIMAL(10, 0) NOT NULL,
    `valor_com_desconto` DECIMAL(10, 0) NULL,
    `criado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_error` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ref` VARCHAR(100) NULL,
    `log` VARCHAR(100) NULL,
    `reg` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dia` VARCHAR(100) NULL,
    `titulo` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `doc` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL,

    INDEX `log_error_id_IDX`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notanfe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Cliente` VARCHAR(100) NOT NULL,
    `Fantasia` VARCHAR(80) NOT NULL,
    `LINK` VARCHAR(100) NOT NULL,
    `WhatsApp` VARCHAR(100) NOT NULL,
    `WhatsApp2` VARCHAR(100) NULL,
    `TEL` VARCHAR(100) NULL,
    `email` VARCHAR(80) NOT NULL,
    `razaosocial` VARCHAR(80) NOT NULL,
    `CNPJ` VARCHAR(30) NOT NULL,
    `ie` VARCHAR(30) NOT NULL,
    `ultimaNota` VARCHAR(20) NOT NULL,
    `VctoCertificado` DATE NULL,
    `Valor` VARCHAR(20) NULL,
    `situacao` VARCHAR(20) NOT NULL,
    `plano` VARCHAR(80) NOT NULL,
    `dominio` VARCHAR(80) NOT NULL,
    `user_senha` VARCHAR(20) NOT NULL,
    `contador` VARCHAR(80) NOT NULL,
    `endereco` TEXT NOT NULL,
    `data_inclusao` DATE NOT NULL,
    `data_inicio_cobranca` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notaservico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATE NOT NULL,
    `referencia` TEXT NOT NULL,
    `estatus` TEXT NOT NULL,
    `idnf` TEXT NOT NULL,
    `idfcw` TEXT NOT NULL,
    `cliente` TEXT NOT NULL,
    `cpfcnpj` TEXT NOT NULL,
    `im` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `cep` TEXT NOT NULL,
    `endereco` TEXT NOT NULL,
    `numero` TEXT NOT NULL,
    `bairro` TEXT NOT NULL,
    `cidade` TEXT NOT NULL,
    `uf` TEXT NOT NULL,
    `valor` TEXT NOT NULL,
    `descricao` TEXT NOT NULL,
    `numLote` INTEGER NULL,
    `codigomunicipio` TEXT NOT NULL,
    `Protocolo` VARCHAR(45) NULL,
    `enderecoComplemento` TEXT NULL,
    `NumeroNfse` INTEGER NULL,
    `UrlVisualizacao` TEXT NULL,
    `CodigoVerificacao` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parceiro` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` TEXT NULL,
    `senha` TEXT NULL,
    `mensagem` TEXT NULL,
    `unidade` TEXT NULL,
    `nome` TEXT NULL,
    `fone` TEXT NULL,
    `email` TEXT NULL,
    `observacao` TEXT NULL,
    `endereco` TEXT NULL,
    `A1PJ-12` TEXT NULL,
    `A3PJ-12` TEXT NULL,
    `A3PJ-24` TEXT NULL,
    `A3PJ-36` TEXT NULL,
    `A1PF-12` TEXT NULL,
    `A3PF-12` TEXT NULL,
    `A3PF-24` TEXT NULL,
    `A3PF-36` TEXT NULL,
    `ocultar_valor_volcher` TEXT NULL,
    `tipo_comissao` TEXT NULL,
    `whatsapp` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,
    `status` INTEGER NULL DEFAULT 1,
    `comicao` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_cert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cert` VARCHAR(100) NULL,
    `price` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `value` VARCHAR(100) NULL,
    `descricao` TEXT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    UNIQUE INDEX `produtos_id_IDX`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datavalidade` TEXT NOT NULL,
    `referencia` TEXT NOT NULL,
    `tipocd` TEXT NOT NULL,
    `ativacao` TEXT NOT NULL,
    `indicacao` TEXT NOT NULL,
    `cnpj` TEXT NOT NULL,
    `rsocial` TEXT NOT NULL,
    `responsavel` TEXT NOT NULL,
    `cpf` TEXT NOT NULL,
    `celular` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `formapgto` TEXT NOT NULL,
    `valor` TEXT NOT NULL,
    `datavisita` TEXT NOT NULL,
    `horavisita` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rembra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `criado` TEXT NOT NULL,
    `transmitido` VARCHAR(5) NOT NULL,
    `linhaP` VARCHAR(300) NOT NULL,
    `linhaQ` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `revenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `cidade` VARCHAR(255) NOT NULL,
    `ja_trabalhou` VARCHAR(255) NOT NULL,
    `como_conheceu` VARCHAR(255) NOT NULL,
    `criado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` CHAR(36) NOT NULL DEFAULT '',
    `expires` DATETIME(0) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL,
    `user_id` CHAR(36) NULL,

    UNIQUE INDEX `sessionToken`(`session_token`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sorteio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(100) NOT NULL,
    `cep` VARCHAR(100) NOT NULL,
    `enderco` VARCHAR(100) NOT NULL,
    `complemento` VARCHAR(100) NULL,
    `bairro` VARCHAR(100) NULL,
    `numero` VARCHAR(100) NULL,
    `uf` VARCHAR(100) NULL,
    `cidade` VARCHAR(100) NULL,
    `cpf` VARCHAR(100) NULL,
    `empresa` VARCHAR(100) NULL,
    `certificado` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `lgpd` VARCHAR(100) NULL,

    INDEX `sorteio_id_IDX`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `email_verified` DATETIME(0) NULL,
    `image` VARCHAR(255) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuariosGDC` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chave` TEXT NOT NULL,
    `cpfcnpj` TEXT NOT NULL,
    `nome` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuariosfcw` (
    `idagr` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` TEXT NULL,
    `senha` TEXT NULL,
    `nome` TEXT NULL,
    `c_unidade` INTEGER NULL,
    `polo` TEXT NULL,
    `bloc_filial` TEXT NULL,
    `bloco_de_notas` TEXT NULL,
    `bt_producao` TEXT NULL,
    `bt_comissao` TEXT NULL,
    `tabela_voucher` TEXT NULL,
    `ver_t_custo` TEXT NULL,
    `bloc_vl_comicao` TEXT NULL,
    `bloquearINT` INTEGER NULL,
    `bt_ag_indica` TEXT NULL,
    `bt_sol_boleto` TEXT NULL,
    `bloc_bt_bol_fcw` TEXT NULL,
    `bloc_bt_nfe_fcw` TEXT NULL,
    `bloc_cont_obs` TEXT NULL,
    `bt_financeiro` TEXT NULL,
    `A1PF` TEXT NULL,
    `A3PF-12` TEXT NULL,
    `A3PF-24` TEXT NULL,
    `A3PF` TEXT NULL,
    `A3PF-HSM-1ano` TEXT NULL,
    `A1PJ` TEXT NULL,
    `A3PJ-12` TEXT NULL,
    `A3PJ-24` TEXT NULL,
    `A3PJ` TEXT NULL,
    `A3PJ-HSM-1ano` TEXT NULL,
    `bloc_nuvem` TEXT NULL,
    `verComissaoParceiro` TEXT NULL,
    `senha_has` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `email` VARCHAR(100) NULL,
    `titulo` VARCHAR(100) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `permassao` VARCHAR(5) NULL,

    PRIMARY KEY (`idagr`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_tokens` (
    `token` VARCHAR(255) NOT NULL DEFAULT '',
    `identifier` VARCHAR(255) NOT NULL,
    `expires` DATETIME(0) NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parceiro` TEXT NOT NULL,
    `nome` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `telefone` TEXT NOT NULL,
    `endereco` TEXT NOT NULL,
    `observacao` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voucher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voucher` TEXT NOT NULL,
    `estatos` TEXT NOT NULL,
    `dt_resgate` INTEGER NOT NULL,
    `id_fcw` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
