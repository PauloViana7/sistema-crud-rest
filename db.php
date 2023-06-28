<?php
class DB {
    private $servername = "localhost";
    private $username = "usuario_BD";
    private $password = "senha";
    private $dbname = "nome_BD";
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        if ($this->conn->connect_error) {
            die("Erro na conexão com o banco de dados: " . $this->conn->connect_error);
        }
    }

    public function getRegistros() {
        $sql = "SELECT * FROM usuarios";
        $result = $this->conn->query($sql);
        $registros = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $registros[] = $row;
            }
        }

        return $registros;
    }

    public function getRegistro($id) {
        $sql = "SELECT * FROM usuarios WHERE id = '$id'";
        $result = $this->conn->query($sql);
        return $result->fetch_assoc();
    }

    public function adicionarRegistro($nome, $email, $password, $data) {
        $sql = "INSERT INTO usuarios (name, email, senha, data) VALUES ('$nome', '$email', '$password', '$data')";
        $this->conn->query($sql);
    }

    public function atualizarRegistro($id, $novoNome, $novoEmail, $novaSenha, $data) {
        $sql = "UPDATE usuarios SET name = '$novoNome', email = '$novoEmail', senha = '$novaSenha', data = '$data' WHERE id = '$id'";
        $this->conn->query($sql);
    }

    public function excluirRegistro($id) {
        $sql = "DELETE FROM usuarios WHERE id = '$id'";
        $this->conn->query($sql);
    }

    public function __destruct() {
        $this->conn->close();
    }
}
?>
