create database derdnik;
use derdnik;

-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

CREATE TABLE campeao (
	idCampeao int primary key auto_increment,
    nome varchar(45),
    abates int,
    mortes int
);

create table partida (
	idPartida int auto_increment,
    fkCampeao int,
    fkUsuario int,
		constraint pkComposta primary key (idPartida, fkCampeao, fkUsuario),
	resultado varchar(10),
		constraint chkResultado check (resultado in ('vitoria', 'derrota'))
);
