<?php
	session_start();
	
	include_once "dbConfig.php";
	
		
	$image=$_FILES['image']['name'];
	//$_SESSION['image'] = $image;
	$target="img/".basename($_FILES['image']['name']);
	
	$sql = 'insert into graphics(name,path,description) values(\''.$_POST['name'].'\',\''.$target.'\',\''.$_POST['description'].'\')';

	
	move_uploaded_file($_FILES['image']['name'], $target);
	//$_SESSION["target"]=$target;
	unset($_SESSION["page"]);
	$_SESSION["page"]="addItems";
	header('location:index.php');

?>