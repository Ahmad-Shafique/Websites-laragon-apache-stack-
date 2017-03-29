<?php session_start()?>
<html>
<head>
	<title>Login Validation</title>
</head>

<body>
	<div >
		
	</div>

<?php

include_once("config.php");

$username=$_POST['username'];
$password=$_POST['password'];


	$str = "select username,password from userpass where username='".$username."' and password='".$password."'";

	
	$_SESSION['query']= $str;
	$res = $mysqli->query($str);
	if($res->num_rows > 0 || $res->num_rows==1) {
		echo $str;
		$_SESSION['username'] = $username;
		$_SESSION['password'] = $password;
		//$_SESSION['error']="Logged in !!!";
		header("Location:adminInsert.php");
	}
	else {
		echo $str;
		$_SESSION['error'] = 'Username and Password combination not found';
		header("Location:login.php");
	}
	

?>
</body>
</html>

create table userpass(
username varchar(30),
password varchar(30),
primary key(username)
);


create table hotels(
id integer(5) primary key auto_increment,
hotelName varchar(50),
stars integer(1),
address varchar(100),
facilities varchar(100)
);