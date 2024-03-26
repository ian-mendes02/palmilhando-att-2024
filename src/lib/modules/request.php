<?php
    $conn = new mysqli('srv1078.hstgr.io', 'u232384656_adm', '@Podal2023', 'u232384656_encontro');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $_POST = json_decode(file_get_contents("php://input"), true);
    if (isset($_POST['email'], $_POST['name'])) {
        $email = $_POST['email'];
        $name = $_POST['name'];
        $query_email = $conn->query("SELECT * FROM `participantes_2023` WHERE `email` = '$email'");
        $query_name = $conn->query("SELECT * FROM `participantes_2023` WHERE `comprador` = '$name'");
        $valid_email = $query_email->num_rows > 0;
        $valid_name = $query_name->num_rows > 0;
        echo json_encode(array('valid_email' => $valid_email, 'valid_name' => $valid_name));
    }
    $conn->close();
