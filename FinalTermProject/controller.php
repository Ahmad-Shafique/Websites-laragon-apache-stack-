<?php
	
	session_start();
	
	unset($_SESSION["page"]);
	
	//echo $_GET['page'];
	$var = $_GET['page'];
	//echo $var;
	if($var == '1'){
		//unset($_SESSION["page"]);
		$_SESSION["page"]="home";
		//echo $_SESSION["page"];
	}
	else if($var == '2'){
		//echo 'second step';
		//unset($_SESSION["page"]);
		$_SESSION["page"]="aboutMe";
		//echo $_SESSION["page"];
	}
	else if($var == '3'){
		//unset($_SESSION["page"]);
		$_SESSION["page"]="graphics";
		//echo $_SESSION["page"];
	}
	else if($var == '4'){
		//unset($_SESSION["page"]);
		$_SESSION["page"]="contactUs";
		//echo $_SESSION["page"];
	}
	else if($var == '5'){
		//unset($_SESSION["page"]);
		$_SESSION["page"]="viewMessages";
		//echo $_SESSION["page"];
	}
	else if($var == '6'){
		//unset($_SESSION["page"]);
		$_SESSION["page"]="addItems";
		//echo $_SESSION["page"];
	}
	else if($var == '7'){
		//unset($_SESSION["page"]);
		//$_SESSION["page"]="home";
		header('location: logout.php');
		//echo $_SESSION["page"];
	}
	
	//echo $_SESSION["page"];
	
	header('location: index.php');
	
?>