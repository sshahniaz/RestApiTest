<?php

header('Content-Type:application/json');
header('Acess-Control-Allow-method: GET');
header('Acess-Control-Allow-Origin: *');
//header('Acess-Control-Allow-header: "Content-Type:application/json","Acess-Control-Allow-method: GET","Acess-Control-Allow-Origin:http://127.0.0.1:5500/site/index.html"');

include "db_conn.php";

$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

if (!$result) {
    die("SQL Qurey Failed");
} else {
    if (mysqli_num_rows($result) > 0) {
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }else {
        echo json_encode(array('message'=>'NO record found', 'status'=>'Failed'));
    }
}

?>