<!DOCTYPE html>

<?php
	session_start();
?>


<script type="text/javascript" src="todoScripts.js"></script>	
	
<html>
	<head>
		<title>Improved TODO </title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="w3.css">
		<link rel="stylesheet" href="todocss.css">
	</head>
	
	<body>
		<div class="todomainpagediv">
			<p>Enter you desired username</p>  <br>
			<form action="dashboard.php" id="newUserName">
				<input type="text" name="newusername" id="newusername"><p id="newusernamemessage"></p><br><input type="button" value="Create" onclick="newUsernameAjaxValidator()">
			</form>
			<br>
			<br>
			<p>Already have an account ? </p>
			
			<form action="dashboard.php" id="oldUserName" method="POST">
				<p>Enter username here</p>
				<input type="text" name="oldusername" id="oldusername">
				<p id="oldusernamemessage"></p>
				<br><input type="button" value="Confirm" onclick="oldUsernameAjaxValidator()">
			</form>
		</div>
		
		<br><br><br><a href="test.php">Test JS functions</a> 
		<br><br><br><a href="dashboard.html">Dashboard</a>
		<br><br><br><a href="testDB.php">Database Tester</a>
	</body>
	

	
	
	
	
</html>