<?php
session_start();

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

require "../includes/database_connect.php";

$user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : NULL;
$city_name = $_GET["city"];

$sql_1 = "SELECT * FROM cities WHERE name = '$city_name'";
$result_1 = mysqli_query($conn, $sql_1);
if (!$result_1) {
    echo "Something went wrong!";
    return;
}
$city = mysqli_fetch_assoc($result_1);
if (!$city) {
    echo "Sorry! We do not have any MESS listed in this city.";
    return;
}
$city_id = $city['id'];

$sql_2 = "SELECT * FROM mess WHERE city_id = $city_id";
$result_2 = mysqli_query($conn, $sql_2);
if (!$result_2) {
    echo "Something went wrong!";
    return;
}
$messes = mysqli_fetch_all($result_2, MYSQLI_ASSOC);


$sql_3 = "SELECT * 
            FROM interested_users_mess ium
            INNER JOIN mess m ON ium.mess_id = m.id
            WHERE m.city_id = $city_id";
$result_3 = mysqli_query($conn, $sql_3);
if (!$result_3) {
    echo "Something went wrong!";
    return;
}
$interested_users_messes = mysqli_fetch_all($result_3, MYSQLI_ASSOC);
$sql_4 = "SELECT * 
            FROM owner_users_mess ";
$result_4 = mysqli_query($conn, $sql_4);
if (!$result_4) {
    echo "Something went wrong!";
    return;
}
$owners = mysqli_fetch_all($result_4, MYSQLI_ASSOC);

$new_messes = array();
foreach ($messes as $mess) {
    $mess_images = glob("../img/messes/" . $mess['id'] . "/*");
     $mess_image = "img/messes/" . $mess['id'] . "/" . basename($mess_images[0]);

    $interested_users_count = 0;
    $is_interested = false;
    $is_owner=false;
    foreach ($interested_users_messes as $interested_user_mess) {
        if ($interested_user_mess['mess_id'] == $mess['id']) {
            $interested_users_count++;

            if ($interested_user_mess['user_id'] == $user_id) {
                $is_interested = true;
            }
        }
    }
    if(!$user_id==NULL){
    foreach ($owners as $owner){
        if($owner['mess_id'] == $mess['id']){
            if ($owner['user_id'] == $user_id) {
                $is_owner = true;
            }
        }
    }}
    $mess['interested_users_count'] = $interested_users_count;
    $mess['is_interested'] = $is_interested;
    $mess['is_owner'] = $is_owner;
    $mess['image'] = $mess_image;
    $mess['rating_safety']=0;
    $mess['rating_clean']=0;
    $new_messes[] = $mess;
}

echo json_encode($new_messes);