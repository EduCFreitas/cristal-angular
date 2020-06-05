/* Lógico_Cristal: */

CREATE TABLE TB_USUARIO (
    cd_cpf varchar(11) not null PRIMARY KEY,
    nm_usuario varchar(80) not null,
    nm_email varchar(120) not null,
    cd_telefone varchar(16),
    cd_senha varchar(50) not null,
    nm_logradouro varchar(150) not null,
    nm_estado varchar(20) not null,
    nm_cidade varchar(50) not null,
    nm_bairro varchar(50) not null,
    cd_cep varchar(8) not null
);

CREATE TABLE TB_PRODUTO (
    cd_produto int not null auto_increment PRIMARY KEY,
    nm_produto varchar(50) not null,
    ds_produto varchar(255),
    nm_tamanho varchar(5) not null,
    nm_cor varchar(20) not null,
    vl_produto decimal(5,2) not null,
    qt_estoque int not null
);

CREATE TABLE TB_COMPRA (
    cd_compra int not null auto_increment PRIMARY KEY,
    vl_compra decimal(7,2) not null,
    dt_compra date
);

CREATE TABLE TB_USUARIO_COMPRA (
    cd_cpf_usuario varchar(11),
    cd_compra int
);

CREATE TABLE TB_CARRINHO (
    cd_produto int,
    cd_compra int,
    qt_produto_compra int not null
);
 
ALTER TABLE TB_USUARIO_COMPRA ADD CONSTRAINT FK_TB_USUARIO_COMPRA_1
    FOREIGN KEY (cd_cpf_usuario)
    REFERENCES TB_USUARIO (cd_cpf)
    ON DELETE RESTRICT;
 
ALTER TABLE TB_USUARIO_COMPRA ADD CONSTRAINT FK_TB_USUARIO_COMPRA_2
    FOREIGN KEY (cd_compra)
    REFERENCES TB_COMPRA (cd_compra)
    ON DELETE SET NULL;
 
ALTER TABLE TB_CARRINHO ADD CONSTRAINT FK_TB_CARRINHO_1
    FOREIGN KEY (cd_produto)
    REFERENCES TB_PRODUTO (cd_produto)
    ON DELETE RESTRICT;
 
ALTER TABLE TB_CARRINHO ADD CONSTRAINT FK_TB_CARRINHO_2
    FOREIGN KEY (cd_compra)
    REFERENCES TB_COMPRA (cd_compra)
    ON DELETE SET NULL;