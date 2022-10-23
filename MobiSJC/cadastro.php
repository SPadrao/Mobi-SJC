<?php
include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $Nome = trim($request->Nome);
    $Sobrenome = trim($request->Sobrenome);
    $Nascimento = trim($request->Nascimento);
    $Celular = trim($request->Celular);
    $Email = mysqli_real_escape_string($mysqli, trim($request->Email));
    $Senha = mysqli_real_escape_string($mysqli, trim($request->Senha));
    $hash = password_hash($Senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuario(
        Nome,
        Sobrenome,
        Nascimento,
        Celular,
        Email,
        Senha
        ) VALUES ('$Nome',
        '$Sobrenome',
        '$Nascimento',
        '$Celular',
        '$Email',
        '$hash')";

        if($mysqli->query($sql)) {
            $data = array('mensagem'=> 'sucesso');
            echo json_encode($data);

        }else{
            $data = array('mensagem'=> 'erro');
            echo json_encode($data);

        }
}
?>