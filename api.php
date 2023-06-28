<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once('db.php');

$method = $_SERVER['REQUEST_METHOD'];
$db = new DB();

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $registro = $db->getRegistro($id);
            echo json_encode($registro);
        } else {
            $registros = $db->getRegistros();
            echo json_encode($registros);
        }
        break;

    case 'POST':
        var_dump($_POST);
        $nome = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $data = date("Y/m/d");
        $db->adicionarRegistro($nome, $email, $password, $data);
        break;

    case 'PUT':
        parse_str(file_get_contents("php://input"), $_PUT);
        $id = $_GET['id'];
        $novoNome = $_PUT['novoNome'];
        $novoEmail = $_PUT['novoEmail'];
        $novaSenha = $_PUT['novaSenha'];
        $data = date("Y/m/d");
        $db->atualizarRegistro($id, $novoNome, $novoEmail, $novaSenha, $data);
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $db->excluirRegistro($id);
        break;
}
