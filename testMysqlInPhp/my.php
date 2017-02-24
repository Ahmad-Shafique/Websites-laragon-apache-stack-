<!DOCTYPE html>

<html>
	<head>
	</head>
	<body>
		 <?php
		 
			$servername = "localhost";
			$username = "root";
			$password = "pass";
			
			 //bool phpinfo ([ int $what = INFO_ALL ] );

			try {
				$conn = new PDO("mysql:host=$servername;dbname='adminer'", $username);
				// set the PDO error mode to exception
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				echo "Connected successfully";
				}
			catch(PDOException $e)
				{
				echo "Connection failed: " . $e->getMessage();
				}
			
				
				
				/*
			$con = mysqli_connect("localhost","user","password","usersdb","8040");

			// Check connection
			 if (mysqli_connect_errno())
			  {
			  echo "Failed to connect to MySQL: " . mysqli_connect_error();
			  }
			  */
			  
			  
			/*
			$servername = "localhost:8040";
			$username = "user";
			$password = "password";

			// Create connection
			$conn = mysqli_connect($servername, $username, $password , "usersdb");

			// Check connection
			if (!$conn) {
				die("Connection failed: " . mysqli_connect_error());
			}
			echo "Connected successfully";
			*/
			
			
			/*
			// Begin Vault (this is in a vault, not actually hard-coded)
			$host="localhost";
			$username="user";
			$password="password";
			$dbname="usersdb";
			$port="8040";
			// End Vault

			try {
				$dbh = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password);
				$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				echo "I am connected.<br/>";

				// ... continue with your code

				// PDO closes connection at end of script
			} catch (PDOException $e) {
				echo 'PDO Exception: ' . $e->getMessage();
				exit();
			}
			  */
		?> 
	
		<form method="post" action="">
			Username : <input type="text" name="username"><br>
			Password : <input type="password" name="password"><br>
			<input type="submit" value="Insert into database">
		</form>
	</body>
</html>