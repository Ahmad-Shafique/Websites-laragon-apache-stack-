<?php 

session_start();

include_once("config.php");

$hotelName = $_POST['hotelName'];
$stars = $_POST['stars'];
$address = $_POST['address'];
$facilities = $_POST['facilities'];


	$str = "delete from hotels where id=".$_POST['id'];

	
	$_SESSION['query']= $str;
	$_SESSION['deleted'] = "Deleted " .$hotelName. " Information";
	$mysqli->query($str);
	
	header("location:adminDelete.php");
?>

