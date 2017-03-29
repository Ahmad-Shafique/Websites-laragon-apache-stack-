<?php 
session_start()

include_once("config.php");

$hotelName = $_POST['hotelName'];
$stars = $_POST['stars'];
$address = $_POST['address'];
$facilities = $_POST['facilities'];


	$str = "update hotels h set h.hotelName='".$hotelName."',h.stars=".$stars.",h.address='".$address."' where hotelName='".$facilities."'";

	
	$_SESSION['query']= $str;
	$_SESSION['updated'] = "Updated " .$hotelName. " Information";
	$mysqli->query($str);
	
	header("location:adminUpdate.php");
?>

;