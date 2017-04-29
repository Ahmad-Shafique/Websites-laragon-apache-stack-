<?php
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbn = 'localdb';
			$port = 3306;
			
			$mysql = new PDO("mysql:host=$servername;port=$port;dbname=$dbn", $username );
				
?>