<?php
// Start the session
session_start();
?>

<!DOCTYPE html>

<html>
	<head>
	</head>
	
	<body>
		<form method="post" action="CheckSignUp.php">
			<p>First Name <input type="text" name="first_name"><br></p>
			<p>Last Name <input type="text" name="last_name"><br></p>
			<p>Username <input type="text" name="username"><br></p>
			<p>Password <input type="password" name="password"><br></p>
			<p>Retype Password <input type="password" name="repassword"><br></p>
			<p>Email <input type="text" name="email"><br></p>
			<p>NID number <input type="text" name="nid"><br></p>
			<p>Picture : <br><br><br><br><br></p>
			<input type="reset" value="Clear All Fields">
			<input type="submit" value="Confirm">
			
		</form>
		
		
		<?php
		if(isset($_SESSION["ne"])){
			echo "<br><br><br><br><br><br>";
			if($_SESSION["ne"] != ""){
				echo $_SESSION["ne"];
			}
			elseif($_SESSION["pe"] != ""){
				echo "<br>". $_SESSION["pe"];
			}
			elseif($_SESSION["ee"] != ""){
				echo "<br>". $_SESSION["ee"];
			}
			else{
				//echo "Everything is OKAY !!! ";
			}
		}
		?>
		
	</body>
</html>
