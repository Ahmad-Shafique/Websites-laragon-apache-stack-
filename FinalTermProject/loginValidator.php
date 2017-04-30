<?php
	session_start();
	include_once "dbConfig.php";
	
	$str = "select username,password from userpass where username='".$_POST['user']."' and password='".$_POST['user']."'";

	$_SESSION['query']= $str;
	$exist = $mysql->query($str);
	$flag2=false;
	foreach ($exist as $rw){
	if($rw['username'] != null && $rw['password'] != null) $flag2=true;
	}
	if($flag2){
		//echo "Username exists";
		echo 1;
		$_SESSION['user']=$_POST['user'];
		$_SESSION['page']=$_POST['home'];
	}
	else{
		echo 0;
	}
	//echo 'outside';
?>