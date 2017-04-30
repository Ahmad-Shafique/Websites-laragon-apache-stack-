<?php 
	echo '<link rel="stylesheet" href="menuContainer.css">';
	
	/*
	echo '<div class="menu container">
		<div class="menuItem">
			<button onclick="homePress()">Home</button>
		</div>
		<div class="menuItem">
			<button onclick="aboutMePress()">About Me</button>
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
	
	
	
	//echo "Includeing menu";
	//header('Location: index.php');
	
	
	/*
	echo '<div class="menu container">
		<div class="menuItem">
			<a href="controller.php?page=\'1\'">Home</a>
		</div>
		<div class="menuItem">
			<a href="controller.php?page=\'2\'">About Me</a>
		</div>
		<div class="menuItem">
			<a href="controller.php?page=\'3\'">Graphics Design</a>
		</div>
		<div class="menuItem">
			<a href="controller.php?page=\'4\'"">Contact Us</a>
		</div>
		
	</div>';
	*/
	
	
		echo '<div class="menu container">
			<div class="menuItem">
				<div class="spItem">
					<a href="controller.php?page=1">Home</a>
				</div>';
		if(!isset($_SESSION['user'])){
			echo'<div class="spItem">
					<p onclick="loginPressed()">Login</p>
				</div>';
		}
				
		echo'</div>
			<div class="menuItem">
				<a href="controller.php?page=2">About Me</a>
			</div>
			<div class="menuItem">
				<a href="controller.php?page=3">Graphics Design</a>
			</div>';
		if(isset($_SESSION['user'])){
			echo '<div class="menuItem">
						<a href="controller.php?page=5">View messages</a>
					</div>
					<div class="menuItem">
						<a href="controller.php?page=6">Add Items</a>
					</div>
					<div class="menuItem">
						<a href="controller.php?page=7">Log Out</a>
					</div>';
		}
		else
			echo '<div class="menuItem">
					<a href="controller.php?page=4">Contact Us</a>
				</div>';
		echo'</div>';
	
	
?>