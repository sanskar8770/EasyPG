<?php
session_start();

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

require "../includes/database_connect.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(array("success" => false, "is_logged_in" => false));
    return;
}

$user_id = $_SESSION['user_id'];
$mess_id = $_GET["mess_id"];
$menu=$_GET["menu"];

$sql_1 = " UPDATE mess SET menu='$menu' WHERE mess.id = $mess_id";
$result_1 = mysqli_query($conn, $sql_1);
if (!$result_1) {
    echo json_encode(array("success" => false, "message" => mysqli_error($conn)));
    return;
}
else{
    echo json_encode(array("success" => true));
}


