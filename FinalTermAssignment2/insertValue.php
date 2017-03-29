<?php 

session_start();

include_once("config.php");

$hotelName = $_POST['hotelName'];
$stars = $_POST['stars'];
$address = $_POST['address'];
$facilities = $_POST['facilities'];


	$str = "insert into hotels(hotelName,stars,address,facilities) values ('".$hotelName."',".$stars.",'".$address."','".$facilities."')";

	
	$_SESSION['query']= $str;
	$_SESSION['inserted'] = "Inserted " .$hotelName. " Information";
	$mysqli->query($str);
	
	header("location:adminInsert.php");
?>
