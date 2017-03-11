<?php
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbn = 'localdb';
			$port = 3306;

			try {
				$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbn", $username );
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$sql =  'show tables like \'users\'';
				$row = $conn->query($sql);
				
				$flag=false;
				foreach ($row as $rw){
					//echo $rw['Tables_in_localdb (users)'];
					if($rw['Tables_in_localdb (users)'] != null) $flag=true;
				}
				
				if($flag) {
					$sql = 'select * from users where username=\'' . $_POST['username'] . '\'';
					$exist = $conn->query($sql);
					$flag2=false;
					foreach ($exist as $rw){
						//echo $rw['Tables_in_localdb (users)'];
						if($rw['username'] != null) $flag2=true;
					}
					if($flag2){
						
						//echo "Username exists";
						echo 0;
					}
					else{
						$sql='insert into users values(\'' . $_POST['username'] . '\')';
						$conn->query($sql);
						//echo "Username inserted";
						echo 1;
					}
				}
				else{
					$sql = 'CREATE TABLE users(username varchar(100) NOT NULL,PRIMARY KEY (username))';

					//echo "Table created";
					$conn->query($sql);
					
					$sql='insert into users values(\'' . $_POST['username'] . '\')';
					//echo "Username inserted in new table";
					$conn->query($sql);
					
					echo 1;
				}
				
			}
			catch(PDOException $e){
				echo 0;
				//echo "PDO exception";
			}
?>