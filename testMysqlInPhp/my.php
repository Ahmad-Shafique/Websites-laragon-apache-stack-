<!DOCTYPE html>

<html>
	<head>
	</head>
	<body>
		 <?php
		 
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbn = 'localdb';
			$port = 3306;
			
			 //bool phpinfo ([ int $what = INFO_ALL ] );

			try {
				$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbn", $username );
				// set the PDO error mode to exception
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				echo "Connected successfully";
				}
			catch(PDOException $e)
				{
				echo "Connection failed: " . $e->getMessage();
				}
			
		?> 
	
		<form method="post" action="">
			Username : <input type="text" name="username"><br>
			Password : <input type="password" name="password"><br>
			<input type="submit" value="Insert into database">
		</form>
	</body>
</html>