<?php 
	echo '<link rel="stylesheet" href="graphics.css">';
	echo'<div class="main container">';
	include_once "menuContainer.php"; 
	echo'<div class="top container">
			<h1>Graphics Designs Showcase</h1>
		</div>
		<div class="items container">';

		include_once "dbConfig.php";

		$sql = 'select * from graphics';

		$result = $mysql->query($sql);
		
		foreach ($result as $rw){
			echo "<div class=\"crop\">";
			echo "<p class='hidden'>".$rw['id']."</p>";
			echo "<img src=" .$rw['path']." onclick=\"\" >";
			echo "</div>";
		}
		
		echo'</div>
	</div>';
		
		
?>