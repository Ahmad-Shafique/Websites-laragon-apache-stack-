<?php
		
		echo '<link rel="stylesheet" href="aboutMe.css">';
		
		
		include_once "dbConfig.php";

		echo'<div class="main container">';
		include_once "menuContainer.php";
		echo '<div class="top container">
			<h1>About me</h1>
		</div>
		<div class="name container">
		<h3>Name</h3>';
			$sql = 'select name from person';

			$result = $mysql->query($sql);
			
			foreach ($result as $rw){
				 $str =$rw['name'];
				 break;
			}
			echo "<p>".$str."</p>";
		
		echo '<hr>
		</div>
		<div class="education container">
		<h3>Education</h3>';
			$sql = 'select * from profession where type="education"';

			$result = $mysql->query($sql);
			
			echo "<ul>";
			foreach ($result as $rw){
				echo "<li>";
				echo "<h5>".$rw['title']. " (".$rw['result']. ")</h5>";
				echo "<p>(".$rw['start']." - ".$rw['end'].")<br>";
				echo $rw['organization']."</p>";
				echo "</li>"; 
			}
			echo "</ul>";
				
		echo '<hr>
		</div>
		<div class="occupation container">
		<h3>Occupation</h3>';
			$sql = 'select * from profession where type="job"';

			$result = $mysql->query($sql);
			
			echo "<ul>";
			foreach ($result as $rw){
				echo "<li>";
				echo "<h5>".$rw['title']. "</h5>";
				echo "<p>(".$rw['start']." - ".$rw['end'].")<br>";
				echo $rw['organization']."</p>";
				echo "</li>"; 
			}
			echo "</ul>";
				
		echo '<hr>
		</div>
		<div class="interests container">
		<h3>Interests</h3>';
		
			$sql = 'select interests from person';

			$result = $mysql->query($sql);
			
			foreach ($result as $rw){
				$str =$rw['interests'];
				break;
			}
			$interests = explode(",",$str);
			
			echo "<ul>";
			foreach ($interests as $i){
				echo "<li>".$i."</li>";
			}
			echo "</ul>";
				
		echo'<hr>
		</div>
	</div>';
?>
	