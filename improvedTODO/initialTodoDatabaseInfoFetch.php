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
					$str="Empty : " . htmlspecialchars($_POST['username']) . '::::';
					$sql = 'select todo from todo where username=\'' . htmlspecialchars($_POST['username']) . '\' and date=CURDATE()';
					//$sql = 'select todo from todo where username=\'Nawaz\' and date=CURDATE()';
					$exist = $conn->query($sql);
					$flag2=false;
					
					foreach ($exist as $rw){
						//echo $rw['Tables_in_localdb (users)'];
						//if($rw['todo'] != null) {$flag2=true; $str =$rw['todo']; }
						if($rw['todo'] != null) {$flag2=true; $str =$rw['todo']; }
						
					}
					
					if($flag2){
						//$str .= "Entered if condition. Meaning found existing string...";

						echo $str;
					}
					else{
						
						//echo "table found but string doesn't exist";
						//echo $str.="table found but string doesn't exist"
						echo 0;
					}
				}
				else{
					$sql = 'CREATE TABLE todo(username varchar(100) NOT NULL,date date NOT NULL DEFAULT CURDATE(),todo varchar(5000) NOT NULL,PRIMARY KEY (username,date),FOREIGN KEY (username) REFERENCES users(username))';

					//echo "Table created";
					$conn->query($sql);
					//echo "Table created";
					echo 0;
				}
				
			}
			catch(PDOException $e){
				echo 0;
				//echo "PDO exception";
			}
?>

