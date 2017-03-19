<?php
			
			
			
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbn = 'localdb';
			$port = 3306;

			try {
				$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbn", $username );
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$sql =  'show tables like \'todo\'';
				$row = $conn->query($sql);
				
				$flag=false;
				foreach ($row as $rw){
					//echo $rw['Tables_in_localdb (users)'];
					if($rw['Tables_in_localdb (todo)'] != null) $flag=true;
				}
				
				if($flag) {
					// htmlspecialchars($_POST['username']) 
					$sql = 'INSERT INTO todo VALUES(\''. htmlspecialchars($_POST['username']) .'\' , CURDATE() , \'' . 
							htmlspecialchars($_POST['todo']) . '\' ) ON DUPLICATE KEY UPDATE todo = \'' . htmlspecialchars($_POST['todo']) . '\'';
					$exist = $conn->query($sql);
					echo $sql;

				}
				else{
					echo 0;
				}
				
			}
			catch(PDOException $e){
				echo 0;
				//echo "PDO exception";
			}
		
		
		
?>


