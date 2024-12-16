CREATE DATABASE Umitrix;
USE Umitrix;

CREATE TABLE Empresa (
idEmpresa int primary key auto_increment,
razaoSocial varchar(45) not null,
representanteLegal varchar(45) not null,
cnpj varchar(18) UNIQUE,
email varchar(45) not null UNIQUE,
senha varchar(45) not null,
telefone char(16) not null
);

CREATE TABLE Endereco (
idEndereco int primary key auto_increment,
cep char(10) not null,
uf char(2) not null,
cidade varchar(35) not null,
rua varchar(45) not null,
numero varchar(7) not null,
fkEmpresa int not null unique,
constraint fkEnderecoEmpresa foreign key (fkEmpresa)
	references Empresa(idEmpresa)
);


CREATE TABLE Sensor_DHT11 (
    idSensor int auto_increment primary key,
    dtInstalacao DATE not null,
    fkEmpresa int not null,
    situação int,
    constraint fkSensorEmpresa foreign key (fkEmpresa)
        references Empresa(idEmpresa)
);

CREATE TABLE Registros (
    idRegistros int auto_increment,
    umidade double not null,
    dtMedicao datetime not null,
    fkSensor int not null,
    constraint fkRegistrosSensor foreign key (fkSensor) 
        references Sensor_DHT11(idSensor),
    PRIMARY KEY (idRegistros, fkSensor)
);

CREATE TABLE Alertas (
idAlerta int auto_increment,
descricao varchar(200),
nvAlerta varchar(12) not null, constraint chkAlerta check(nvAlerta in('Ideal','Perigoso','Crítico')),
fkRegistro int not null unique,
constraint fkRegistroAlerta foreign key (fkRegistro) references Registros (idRegistros),
primary key (idAlerta, fkRegistro)
);

insert into alertas values
	(1, 'O seu estoque está ficando úmido', 'Perigoso', 1),
	(2, 'O seu estoque está ficando seco', 'Perigoso', 2),
	(3, null, 'Ideal', 3),
	(4, 'O seu estoque está ficando muito úmido', 'Crítico', 4);
    
insert into alertas values
	(5, 'O seu estoque está ficando muito úmido', 'Crítico', 5);
    
insert into alertas values
	(9, 'O seu estoque está ficando muito quente', 'Crítico', 9);
    
insert into alertas values
	(6, 'O seu estoque está ficando úmido', 'Perigoso', 6);

CREATE TABLE Posicao_sensor (
idPosicao int auto_increment,
coluna int,
linha int,
rua int,
fkSensor int not null unique,
constraint fkSensorPosicao foreign key (fkSensor) references Sensor_DHT11(idSensor),
primary key (idPosicao, fkSensor)
);

select * from Endereco;
SELECT * FROM Registros;
SELECT * FROM Sensor_DHT11;
SELECT * FROM Empresa;
SELECT * FROM Alertas;
SELECT * FROM Posicao_sensor;

insert into Sensor_DHT11 values
	(1, '2024-12-01', 1, 1),
	(2, '2024-12-01', 1, 0),
	(3, '2024-12-01', 1, 1),
	(4, '2024-12-01', 1, 1),
	(5, '2024-11-30', 1, 0),
	(6, '2024-11-30', 1, 0);
    
insert into Sensor_DHT11 values
	(7, '2024-11-29', 1, 0);

-- Inserindo registros fictícios na tabela Registros
INSERT INTO Registros (umidade, dtMedicao, fkSensor)
VALUES
    (46.5, '2024-12-01 08:00:00', 1),
		
    (53.8, '2024-12-01 09:00:00', 1),
    (39.0, '2024-12-01 09:30:00', 1),
    (47.5, '2024-12-01 10:00:00', 1),
    (54.0, '2024-12-01 10:30:00', 1),
    (50.2, '2024-12-01 11:00:00', 1),
    (58.9, '2024-12-01 11:30:00', 1);

insert into registros (umidade, dtMedicao, fkSensor) values
	(45, '2024-11-30 08:00:00', 1),
	(45, '2024-11-29 08:00:00', 1),
	(45, '2024-11-11 08:00:00', 1),
	(45, '2024-11-12 08:00:00', 1);

select count(idSensor) as quantidadeSensor,
	situação as Situacao
		from sensor_dht11
			where fkEmpresa = 1
				group by situação;
                
select count(idSensor) as quantidadeSensor
	from sensor_dht11
		where fkEmpresa = 1;
        
SELECT COUNT(dtMedicao) AS 'qtdAlertas' 
    FROM Alertas 
     JOIN Registros 
         ON idRegistros = fkRegistro 
	 join Sensor_DHT11 
		on fkSensor = idSensor
     WHERE dtMedicao LIKE '2024-12-01%'
      and fkEmpresa = 1;
      