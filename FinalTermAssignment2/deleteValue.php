<?php 

session_start();

include_once("config.php");

$hotelName = $_POST['hotelName'];
$stars = $_POST['stars'];
$address = $_POST['address'];
$facilities = $_POST['facilities'];


	$str = "delete from hotels where id=".$_GET['id'];

	
	$_SESSION['query']= $str;
	$_SESSION['deleted'] = "Deleted " .$hotelName. " Information where id is : ".$_GET['id'];
	$mysqli->query($str);
	
	header("location:adminDelete.php");
?>

