# sistema-crud-rest
Desenvolvimento de um Sistema CRUD com PHP, JavaScript e Requisições REST.

Foi utilizado BD MariaDB version 15.1

#comando para criar BD de Usuarios

CREATE DATABASE nome_do_banco_de_dados;

#comando para criar tabela de Usuarios

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  data DATE
);

# bd.php -> onde deve ser alterado as informações de conexão do BD.


