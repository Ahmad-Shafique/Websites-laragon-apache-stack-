<?php 
	echo '<link rel="stylesheet" href="menuContainer.css">';
	
	/*
	echo '<div class="menu container">
		<div class="menuItem">
			<button onclick="';
			$_SESSION["page"]="home";
			header('Location: '.$_SERVER['PHP_SELF']);
			//die;
			echo'">Home</button>
		</div>
		<div class="menuItem">
			<button onclick="';
			$_SESSION["page"]="aboutMe";
			header('Location: '.$_SERVER['PHP_SELF']);
			//die;
			echo'">About Me</button>
		</div>
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="graphics";
			echo'">Graphics Design</a>
		</div>
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="contactUs";
			echo'">Contact Us</a>
		</div>
		
	</div>';
	*/
	
	
	echo '<div class="menu container">
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="home";
			echo'">Home</a>
		</div>
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="aboutMe";
			echo'">About Me</a>
		</div>
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="graphics";
			echo'">Graphics Design</a>
		</div>
		<div class="menuItem">
			<a href="index.php" onclick="';
			$_SESSION["page"]="contactUs";
			echo'">Contact Us</a>
		</div>
		
	</div>';
	*/
?>