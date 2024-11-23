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
    icone varchar(245)
);

create table partida (
	idPartida int auto_increment,
    fkCampeao int,
    fkUsuario int,
		constraint pkComposta primary key (idPartida, fkCampeao, fkUsuario),
	abates int,
    mortes int,
	resultado varchar(10),
		constraint chkResultado check (resultado in ('vitoria', 'derrota'))
);

INSERT INTO campeoes (nome) VALUES
('Aatrox'),
('Ahri'),
('Akali'),
('Akshan'),
('Alistar'),
('Amumu'),
('Anivia'),
('Annie'),
('Aphelios'),
('Ashe'),
('Aurelion Sol'),
('Aurora')
('Azir'),
('Bardo'),
('Bel Veth'),
('Blitzcrank'),
('Brand'),
('Braum'),
('Briar'),
('Caitlyn'),
('Camille'),
('Cassiopeia'),
('Cho Gath'),
('Corki'),
('Darius'),
('Diana'),
('Dr. Mundo'),
('Draven'),
('Ekko'),
('Elise'),
('Evelynn'),
('Ezreal'),
('Fiddlesticks'),
('Fiora'),
('Fizz'),
('Galio'),
('Gangplank'),
('Garen'),
('Gnar'),
('Gragas'),
('Graves'),
('Gwen'),
('Hecarim'),
('Heimerdinger'),
('Hwei'),
('Illaoi'),
('Irelia'),
('Ivern'),
('Janna'),
('Jarvan IV'),
('Jax'),
('Jayce'),
('Jhin'),
('Jinx'),
('K Sante'),
('Kai Sa'),
('Kalista'),
('Karma'),
('Karthus'),
('Kassadin'),
('Katarina'),
('Kayle'),
('Kayn'),
('Kennen'),
('Kha'Zix'),
('Kindred'),
('Kled'),
('Kog'Maw'),
('LeBlanc'),
('Lee Sin'),
('Leona'),
('Lillia'),
('Lissandra'),
('Lucian'),
('Lulu'),
('Lux'),
('Malphite'),
('Malzahar'),
('Maokai'),
('Master Yi'),
('Milio',)
('Miss Fortune'),
('Mordekaiser'),
('Morgana'),
('Naafiri'),
('Nami'),
('Nasus'),
('Nautilus'),
('Neeko'),
('Nidalee'),
('Nilah'),
('Nocturne'),
('Nunu & Willump'),
('Olaf'),
('Orianna'),
('Ornn'),
('Pantheon'),
('Poppy'),
('Pyke'),
('Qiyana'),
('Quinn'),
('Rakan'),
('Rammus'),
('Rek Sai'),
('Rell'),
('Renekton'),
('Rengar'),
('Riven'),
('Rumble'),
('Ryze'),
('Samira'),
('Sejuani'),
('Senna'),
('Seraphine'),
('Sett'),
('Shaco'),
('Shen'),
('Shyvana'),
('Singed'),
('Sion'),
('Sivir'),
('Skarner'),
('Smolder'),
('Sona'),
('Soraka'),
('Swain'),
('Sylas'),
('Syndra'),
('Tahm Kench'),
('Taliyah'),
('Talon'),
('Taric'),
('Teemo'),
('Thresh'),
('Tristana'),
('Trundle'),
('Tryndamere'),
('Twisted Fate'),
('Twitch'),
('Udyr'),
('Urgot'),
('Varus'),
('Vayne'),
('Veigar'),
('Vel Koz'),
('Vex'),
('Vi'),
('Viego'),
('Viktor'),
('Vladimir'),
('Volibear'),
('Warwick'),
('Wukong'),
('Xayah'),
('Xerath'),
('Xin Zhao'),
('Yasuo'),
('Yone'),
('Yorick'),
('Yuumi'),
('Zac'),
('Zed'),
('Zeri'),
('Ziggs'),
('Zilean'),
('Zoe'),
('Zyra');
