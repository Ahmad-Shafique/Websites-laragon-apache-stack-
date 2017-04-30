<?php
	session_start();
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	include_once "dbConfig.php";
	
	$sql = 'insert into messages values(\'' . $name .'\',\'' .$email.'\',\''.$subject.'\', \''.$message.'\')';
	echo $sql;
	$mysql->query($sql);
	
	unset($_SESSION['page']);
	$_SESSION['page'] = 'home';
	header('location:index.php');
?>