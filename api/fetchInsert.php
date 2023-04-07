<?php

header( 'Content-Type:application/json' );
header( 'Acess-Control-Allow-method: POST' );
header( 'Acess-Control-Allow-Origin: *' );

include "db_conn.php";

$data = json_decode( file_get_contents( "php://input" ), true );
//$prodID = $data['pID'];

$sql = "INSERT INTO products (product_name, unit_price, quantity) VALUES ('{$data['product_name']}', {$data['unit_price']}, {$data['quantity']})";
$result = mysqli_query( $conn, $sql );

if ( ! $result ) {
	die( "SQL Qurey Failed" );
} else {
	// if ( mysqli_num_rows( $result ) > 0 ) {
	//$output = mysqli_fetch_all( $result, MYSQLI_ASSOC );
	echo json_encode( array( 'message' => 'Record Inserted', 'status' => 'Success' ) );
	// } else {
	//echo json_encode( array( 'message' => 'NO record found', 'status' => 'Failed' ) );
	// }
}