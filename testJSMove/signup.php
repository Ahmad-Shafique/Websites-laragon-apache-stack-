<!DOCTYPE html>
<html>
<head>
	<title>Form validation in Javascript</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="js.js"></script>
	
</head>
<body>
<fieldset>
<legend>Signup</legend>
<div id="wrapper">
	<form method="POST" action="index.php" onchange="Validate()" name="vForm">
		<div>
			<input type="text" name="fname" class="textInput" placeholder="First Name">
			<div id="fname_error" class="val_error"></div>
		</div>
		<div>
			<input type="text" name="lname" class="textInput" placeholder="Last Name">
			<div id="lname_error" class="val_error"></div>
		</div>
		
		<div>
			<input type="text" name="username" class="textInput" placeholder="Username">
			<div id="name_error" class="val_error"></div>
        </div>

		<div>
			<input type="email" name="email" class="textInput" placeholder="Email">
		</div>
		<div>
			<input type="remail" name="remail" class="textInput" placeholder="Confirm Email">
			<div id="email_error" class="val_error"></div>
		</div>

		
		Gender :
		<input type="radio" name="gender" value="male">Male
		<input type="radio" name="gender" value="female">Female
		<div>
			<input type="password" name="password" class="textInput" placeholder="password">
		</div>
		<div>
			<input type="password" name="password_confirmation" class="textInput" placeholder="password confirmation">
			<div id="password_error" class="val_error"></div>
		</div>
		<div>
			<input type="submit" class="btn" name="register" value="Register">
		</div>
	</form>
</div>
</fieldset>
</body>
</html>
<!-- add javascript here -->
