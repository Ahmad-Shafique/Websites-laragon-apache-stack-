

<?php
session_start();
?>

<!DOCTYPE html>

<html>
	<head>
		<title>Login Page</title>
	</head>
	<body>
		<h2 align="center">Login</h2>
		<br>
		<br>
		<br>
		<br>
		<br>
		<div align='center'>
			<form action="loginValidation.php" method="POST">
				Username : <input type='text' name="username"><br> <br>
				Password : <input type='password' name="password"><br> <br>
						<input type='submit' value ="Submit">
			</form>
			<h6 color="red"><?php if(isset($_SESSION['error'])) echo $_SESSION['error'] ?></h6>
		</div>
	</body>
</html>


<?php

/*
$username=$_SESSION['username'];
$password=$_SESSION['password'];

	//echo $username;
	//echo $password;
	if(isset($_SESSION['query'])) echo "<br>".$_SESSION['query'];
*/
?>

<!--
<html>
	<head>
	</head>
	<body>
	</body>
</html>
-->