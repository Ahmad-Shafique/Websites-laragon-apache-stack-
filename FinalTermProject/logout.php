<?php
	session_start();
	
	unset($_SESSION['user']);
	unset($_SESSION['page']);
	//$_SESSION['page']='home';
	
	//echo $_SESSION['page'];
	//session_destroy();
	$_SESSION['page']='home';
	
	header('location:index.php');
	
?>