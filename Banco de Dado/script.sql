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
	idPartida int,
    fkCampeao int,
    fkUsuario int,
		constraint pkComposta primary key (idPartida, fkCampeao, fkUsuario),
	abates int,
    mortes int,
	resultado int,
    dataPartida date
);

select * from partida;

truncate table campeao;

INSERT INTO campeao (nome, icone) VALUES
('Aatrox', 'src/champ-icon/AatroxSquare.webp'),
('Ahri', 'src/champ-icon/Ahri_OriginalSquare.webp'),
('Akali', 'src/champ-icon/AkaliSquare.webp'),
('Akshan', 'src/champ-icon/Akshan_OriginalSquare.webp'),
('Alistar', 'src/champ-icon/AlistarSquare.webp'),
('Amumu', 'src/champ-icon/AmumuSquare.webp'),
('Anivia', 'src/champ-icon/AniviaSquare.webp'),
('Annie', 'src/champ-icon/AnnieSquare.webp'),
('Aphelios', 'src/champ-icon/Aphelios_OriginalSquare.webp'),
('Ashe', 'src/champ-icon/AsheSquare.webp'),
('Aurelion Sol', 'src/champ-icon/AurelionSquare.webp'),
('Aurora', 'src/champ-icon/Aurora_OriginalSquare.webp'),
('Azir', 'src/champ-icon/AzirSquare.webp'),
('Bardo', 'src/champ-icon/BardoSquare.webp'),
('Bel Veth', 'src/champ-icon/BelVeth_OriginalSquare.webp'),
('Blitzcrank', 'src/champ-icon/BlitzcrankSquare.webp'),
('Brand', 'src/champ-icon/BrandSquare.webp'),
('Braum', 'src/champ-icon/BraumSquare.webp'),
('Briar', 'src/champ-icon/Briar_OriginalSquare.webp'),
('Caitlyn', 'src/champ-icon/CaitlynSquare.webp'),
('Camille', 'src/champ-icon/CamilleSquare.webp'),
('Cassiopeia', 'src/champ-icon/CassiopeiaSquare.webp'),
('Cho Gath', 'src/champ-icon/ChoGathSquare.webp'),
('Corki', 'src/champ-icon/CorkiSquare.webp'),
('Darius', 'src/champ-icon/DariusSquare.webp'),
('Diana', 'src/champ-icon/DianaSquare.webp'),
('Dr. Mundo', 'src/champ-icon/Dr._Mundo_OriginalSquare.webp'),
('Draven', 'src/champ-icon/DravenSquare.webp'),
('Ekko', 'src/champ-icon/EkkoSquare.webp'),
('Elise', 'src/champ-icon/EliseSquare.webp'),
('Evelynn', 'src/champ-icon/EvelynnSquare.webp'),
('Ezreal','src/champ-icon/EzrealSquare.webp'),
('Fiddlesticks', 'src/champ-icon/Fiddlesticks_OriginalSquare.webp'),
('Fiora', 'src/champ-icon/FioraSquare.webp'),
('Fizz', 'src/champ-icon/FizzSquare.webp'),
('Galio', 'src/champ-icon/Galio_OriginalSquare.webp'),
('Gangplank', 'src/champ-icon/GangplankSquare.webp'),
('Garen', 'src/champ-icon/GarenSquare.webp'),
('Gnar', 'src/champ-icon/GnarSquare.webp'),
('Gragas', 'src/champ-icon/GragasSquare.webp'),
('Graves', 'src/champ-icon/GravesSquare.webp'),
('Gwen', 'src/champ-icon/Gwen_OriginalSquare.webp'),
('Hecarim', 'src/champ-icon/Hecarim_OriginalSquare.webp'),
('Heimerdinger', 'src/champ-icon/HeimerdingerSquare.webp'),
('Hwei','src/champ-icon/Hwei_OriginalSquare.webp'),
('Illaoi', 'src/champ-icon/IllaoiSquare.webp'),
('Irelia', 'src/champ-icon/IreliaSquare.webp'),
('Ivern', 'src/champ-icon/IvernSquare.webp'),
('Janna', 'src/champ-icon/JannaSquare.webp'),
('Jarvan IV', 'src/champ-icon/Jarvan_IVSquare.webp'),
('Jax', 'src/champ-icon/Jax_OriginalSquare.webp'),
('Jayce', 'src/champ-icon/JayceSquare.webp'),
('Jhin', 'src/champ-icon/JhinSquare.webp'),
('Jinx', 'src/champ-icon/JinxSquare.webp'),
('K Sante', 'src/champ-icon/KSante_OriginalSquare.webp'),
('Kai Sa', 'src/champ-icon/KaiSa_OriginalSquare.webp'),
('Kalista', 'src/champ-icon/KalistaSquare.webp'),
('Karma', 'src/champ-icon/KarmaSquare.webp'),
('Karthus', 'src/champ-icon/KarthusSquare.webp'),
('Kassadin', 'src/champ-icon/Kassadin_OriginalSquare.webp'),
('Katarina', 'src/champ-icon/KatarinaSquare.webp'),
('Kayle', 'src/champ-icon/Kayle_OriginalSquare.webp'),
('Kayn', 'src/champ-icon/KaynSquare.webp'),
('Kennen', 'src/champ-icon/KennenSquare.webp'),
('Kha Zix', 'src/champ-icon/KhaZixSquare.webp'),
('Kindred', 'src/champ-icon/KindredSquare.webp'),
('Kled', 'src/champ-icon/KledSquare.webp'),
('Kog Maw', 'src/champ-icon/KogMawSquare.webp'),
('LeBlanc', 'src/champ-icon/LeBlancSquare.webp'),
('Lee Sin', 'src/champ-icon/Lee_Sin_OriginalSquare.webp'),
('Leona', 'src/champ-icon/LeonaSquare.webp'),
('Lillia', 'src/champ-icon/Lillia_OriginalSquare.webp'),
('Lissandra', 'src/champ-icon/LissandraSquare.webp'),
('Lucian', 'src/champ-icon/LucianSquare.webp'),
('Lulu', 'src/champ-icon/LuluSquare.webp'),
('Lux', 'src/champ-icon/LuxSquare.webp'),
('Malphite', 'src/champ-icon/MalphiteSquare.webp'),
('Malzahar', 'src/champ-icon/MalzaharSquare.webp'),
('Maokai', 'src/champ-icon/MaokaiSquare.webp'),
('Master Yi', 'src/champ-icon/Master_YiSquare.webp'),
('Milio', 'src/champ-icon/Milio_OriginalSquare.webp'), 
('Miss Fortune', 'src/champ-icon/Miss_Fortune_OriginalSquare.webp'),
('Mordekaiser', 'src/champ-icon/Mordekaiser_OriginalSquare.webp'),
('Morgana', 'src/champ-icon/MorganaSquare.webp'),
('Naafiri','src/champ-icon/Naafiri_OriginalSquare.webp' ),
('Nami', 'src/champ-icon/NamiSquare.webp'),
('Nasus', 'src/champ-icon/NasusSquare.webp'),
('Nautilus', 'src/champ-icon/NautilusSquare.webp'),
('Neeko', 'src/champ-icon/Neeko_OriginalSquare.webp'),
('Nidalee', 'src/champ-icon/NidaleeSquare.webp'),
('Nilah', 'src/champ-icon/Nilah-OriginalSquare.webp'),
('Nocturne', 'src/champ-icon/NocturneSquare.webp'),
('Nunu & Willump', 'src/champ-icon/Nunu_OriginalSquare.webp'),
('Olaf', 'src/champ-icon/OlafSquare.webp'),
('Orianna','src/champ-icon/OriannaSquare.webp'),
('Ornn', 'src/champ-icon/OrnnSquare.webp'),
('Pantheon', 'src/champ-icon/Pantheon_OriginalSquare.webp'),
('Poppy', 'src/champ-icon/PoppySquare.webp'),
('Pyke', 'src/champ-icon/Pyke_OriginalSquare.webp'),
('Qiyana', 'src/champ-icon/Qiyana_OriginalSquare.webp'),
('Quinn', 'src/champ-icon/QuinnSquare.webp'),
('Rakan', 'src/champ-icon/RakanSquare.webp'),
('Rammus', 'src/champ-icon/Rammus_OriginalSquare.webp'),
('Rek Sai', 'src/champ-icon/RekSaiSquare.webp'),
('Rell', 'src/champ-icon/Rell_OriginalSquare.webp'),
('Renekton','src/champ-icon/RenektonSquare.webp'),
('Rengar', 'src/champ-icon/RengarSquare.webp'),
('Riven', 'src/champ-icon/RivenSquare.webp'),
('Rumble', 'src/champ-icon/JinxRumbleSquareSquare.web'),
('Ryze', 'src/champ-icon/RyzeSquare.webp'),
('Samira', 'src/champ-icon/Samira_OriginalSquare.webp'),
('Sejuani', 'src/champ-icon/SejuaniSquare.webp'),
('Senna', 'src/champ-icon/Senna_OriginalSquare.webp'),
('Seraphine', 'src/champ-icon/Seraphine_OriginalSquare.webp'),
('Sett', 'src/champ-icon/Sett_OriginalSquare.webp'),
('Shaco', 'src/champ-icon/ShacoSquare.webp'),
('Shen', 'src/champ-icon/ShenSquare.webp'),
('Shyvana', 'src/champ-icon/ShyvanaSquare.webp'),
('Singed', 'src/champ-icon/SingedSquare.webp'),
('Sion', 'src/champ-icon/SionSquare.webp'),
('Sivir', 'src/champ-icon/Sivir_OriginalSquare.webp'),
('Skarner' ,'src/champ-icon/SkarnerSquare.webp'),
('Smolder', 'src/champ-icon/Smolder_OriginalSquare.webp'),
('Sona', 'src/champ-icon/SonaSquare.webp'),
('Soraka', 'src/champ-icon/SorakaSquare.webp'),
('Swain', 'src/champ-icon/SwainSquare.webp'),
('Sylas', 'src/champ-icon/SylasSquare.webp'),
('Syndra', 'src/champ-icon/SyndraSquare.webp'),
('Tahm Kench', 'src/champ-icon/Tahm_KenchSquare.webp'),
('Taliyah', 'src/champ-icon/TaliyahSquare.webp'),
('Talon', 'src/champ-icon/TalonSquare.webp'),
('Taric', 'src/champ-icon/TaricSquare.webp'),
('Teemo', 'src/champ-icon/Teemo_OriginalSquare.webp'),
('Thresh', 'src/champ-icon/ThreshSquare.webp'),
('Tristana', 'src/champ-icon/TristanaSquare.webp'),
('Trundle', 'src/champ-icon/TrundleSquare.webp'),
('Tryndamere', 'src/champ-icon/TryndamereSquare.webp'),
('Twisted Fate', 'src/champ-icon/Twisted_FateSquare.webp'),
('Twitch', 'src/champ-icon/Samira_OriginalSquare.webp'),
('Udyr', 'src/champ-icon/Udyr_OriginalSquare.webp'),
('Urgot', 'src/champ-icon/UrgotSquare.webp'),
('Varus', 'src/champ-icon/VarusSquare.webp'),
('Vayne', 'src/champ-icon/VayneSquare.webp'),
('Veigar', 'src/champ-icon/VeigarSquare.webp'),
('Vel Koz', 'src/champ-icon/VelKozSquare.webp'),
('Vex', 'src/champ-icon/Vex_OriginalSquare.webp'),
('Vi', 'src/champ-icon/ViSquare.webp'),
('Viego', 'src/champ-icon/Viego_OriginalSquare.webp'),
('Viktor', 'src/champ-icon/ViktorSquare.webp'),
('Vladimir', 'src/champ-icon/VladimirSquare.webp'),
('Volibear', 'src/champ-icon/Volibear_OriginalSquare.webp'),
('Warwick', 'src/champ-icon/WarwickSquare.webp'),
('Wukong', 'src/champ-icon/WukongSquare.webp'),
('Xayah', 'src/champ-icon/XayahSquare.webp'),
('Xerath', 'src/champ-icon/XerathSquare.webp'),
('Xin Zhao', 'src/champ-icon/Xin_ZhaoSquare.webp'),
('Yasuo', 'src/champ-icon/YasuoSquare.webp'),
('Yone', 'src/champ-icon/Yone_OriginalSquare.webp'),
('Yorick', 'src/champ-icon/YorickSquare.webp'),
('Yuumi', 'src/champ-icon/Yuumi_OriginalSquare.webp'),
('Zac', 'src/champ-icon/ZacSquare.webp'),
('Zed', 'src/champ-icon/ZedSquare.webp'),
('Zeri', 'src/champ-icon/Zeri_OriginalSquare.webp'),
('Ziggs', 'src/champ-icon/ZiggsSquare.webp'),
('Zilean', 'src/champ-icon/ZileanSquare.webp'),
('Zoe', 'src/champ-icon/Zoe_OriginalSquare.webp'),
('Zyra', 'src/champ-icon/ZyraSquare.webp');

insert into usuario (nome, email, senha) values
	('erick', 'erick@gmail.com', '111111');
    
select nome, abates, mortes, idPartida as 'Número da Partida', resultado from partida
	join campeao 
		on idCampeao = fkCampeao;
desc partida;

select * from partida;


-- PEGAR AS MÉDIAS
select truncate(avg(abates), 2) as mediaAbate, truncate(avg(mortes),2) as mediaMorte,
 count(resultado) as totalPartida, sum(resultado) as somaVitoria 
	from partida
		where fkUsuario = 2;
-- PEGAR AS MÉDIAS
        
        
-- PEGAR DADOS PARA GRAFICO KILL MORTE        
select abates as Abate, mortes as Mortes, idPartida as numPartida from partida
	where fkUsuario = 1;
-- PEGAR DADOS PARA GRAFICO KILL MORTE 

  
-- PEGAR DADOS PARA VITORIA DERROTA
select count(resultado) as totalPartida,
 sum(resultado) as somaVitoria,
 dataPartida as dataPartida
		from partida
			where fkUsuario = 2
				group by dataPartida;
select count(resultado) as totalPartida, sum(resultado) as somaVitoria, date_format(dataPartida, '%Y-%m-%d') as dataPartida
	from partida
		where fkUsuario = 2
				group by dataPartida
					limit 7;
-- PEGAR DADOS PARA VITORIA DERROTA

insert into partida values
	(6, 2, 2, 10, 10, 0, '2024-11-23'),
	(7, 2, 2, 10, 10, 1, '2024-11-22'),
	(8, 2, 2, 10, 10, 1, '2024-11-21'),
	(9, 2, 2, 10, 10, 1, '2024-11-20');
    
select c.nome as nomeCampeao, c.icone as iconeCampeao,
        p.fkUsuario as usuario, p.abates as abates, p.mortes as mortes, p.resultado as resultadoPartida, p.dataPartida as dataJogo
            from campeao as c
                join partida as p
                    on c.idCampeao = p.fkCampeao
						where fkUsuario = 2
							order by idPartida desc
								limit 2;

