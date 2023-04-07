<?php

header( 'Content-Type:application/json' );
header( 'Acess-Control-Allow-method: DELETE' );
header( 'Acess-Control-Allow-Origin: *' );

include "db_conn.php";

$data = json_decode( file_get_contents( "php://input" ), true );
$prodID = $data['pID'];

$sql = "DELETE FROM products WHERE productId = {$prodID}";
$result = mysqli_query( $conn, $sql );

if ( ! $result ) {
	die( "SQL Qurey Failed" );
} else {
	if ( mysqli_num_rows( $result ) > 0 ) {
		//$output = mysqli_fetch_all( $result, MYSQLI_ASSOC );
		echo json_encode( array( 'message' => 'Record Deleted', 'status' => 'Success' ) );
	} else {
		echo json_encode( array( 'message' => 'NO record found', 'status' => 'Failed' ) );
	}
}