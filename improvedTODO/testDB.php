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
				echo "Connected successfully<br>";
				$sql =  'show tables like \'test\'';
				$row = $conn->query($sql);
				if(isset($row)) {
					
					echo "table exists ... working on it ...";
					
					$sql = 'select * from test where name=\'Ahmmad\'';
					echo $sql . '<br>';
					$exist = $conn->query($sql);
					if(isset($exist)){
						echo "Exists !!! <br>";
						$sql = 'update test set name=\'Ahmad\' where name=\'Ahmmad\'';
						$conn->query($sql);
						echo "update done!!";
						echo "selecting";
						$sql='select name from test';
						foreach ($conn->query($sql) as $row){
							print($row['name'] . "<br>");
						}
					}
					/*
					//$sql = "insert into test values(\"Nawaz\")";
					$sql = "select * from test";
					foreach ($conn->query($sql) as $row){
						
					}
					*/
				}
				
				else echo "table not found";
				
				/*
				foreach ($conn->query($sql) as $row) {
					print $row['Tables_in_localdb (test)'];
				}
				*/
				}
			catch(PDOException $e)
				{
				echo "Connection failed: " . $e->getMessage();
				}
			
		?> 