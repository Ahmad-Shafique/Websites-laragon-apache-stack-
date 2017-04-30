<!DOCTYPE html>
 
<?php session_start(); ?> 
 
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ftm's World</title>
		<link rel="stylesheet" href="index.css">
		<script src='index.js' type='text/javascript'></script>
	</head>

	<body>
		<?php
		//include_once "home.php";
		
			
			
			if(!isset($_SESSION['page'])){
				include_once "home.php";
			}
			else{
				
				//if(isset($_SESSION['page'])){echo $_SESSION['page'];}
				
				
				if($_SESSION['page'] == 'home')include_once "home.php";
				else if($_SESSION['page'] == 'aboutMe')include_once "aboutMe.php";
				else if($_SESSION['page'] == 'graphics')include_once "graphics.php";
				else if($_SESSION['page'] == 'contactUs')include_once "contactUs.php";
				else if($_SESSION['page'] == 'viewMessages')include_once "viewMessage.php";
				else if($_SESSION['page'] == 'addItems')include_once "addItems.php";
				
			}
			
			
			
			
			//include_once "home.php";
			//include_once "aboutMe.php";
			//include_once "graphics.php";
			//include_once "contactUs.php";
			//include_once "viewMessage.php";
		
		
		?>
		
		
		
	</body>

</html> 


