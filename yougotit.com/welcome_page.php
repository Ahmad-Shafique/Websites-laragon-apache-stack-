

<!DOCTYPE html>

<html>
	<head>
		<style>
			pre.initial {
				color: green;
				padding: 0 0 0 0;		
				margin: 0 0 0 0;
				border: 0 0 0 0;	
				outline: 0 0 0 0;	
				
			} 
			
			h1 {
				font-size: 12em;
				color: green;
				padding: 0 0 0 0;		
				margin: 0 0 0 0;
				border: 0 0 0 0;	
				outline: 0 0 0 0;
			}
			
			h2 {
				font-size: 1.5em;	
				color: red;
				
			}
			ul.leftnav {
				list-style-type: none;
				margin: 0;
				padding: 0;
				width: 200px;
				height: 1000px
				background-color: #f1f1f1;
				position: absolute;
				left: 0px;
				top: 50px;
				
				
				
			}

			li a {
				display: block;
				color: #000;
				padding: 8px 16px;
				text-decoration: none;
			}

			li a.active {
				background-color: #4CAF50;
				color: white;
			}

			li a:hover:not(.active) {
				background-color: #555;
				color: white;
			}
			
			form.signup {
				
				height: 50px;
				width: 150px;
				position: absolute;
				right: 0px;
				top: 50px;
				background-color: #4CAF50;
			}
		</style>
	</head>
	
	<body>
		
	
		<pre class="initial"> <h1><center>WELCOME</h1> <h2><center>to yougotit.com</h2></pre>
		
		<h1><center></h1>
		
		<div>
		<center>
			<?php
				$i=1;
				$GLOBALS['numberOfImages'] = 0;
				$nameList = array();
				while(fopen($i.".jpg", "r")){
					$GLOBALS['numberOfImages']++;
					$nameList[$i-1] = "".$i.".jpg";
					$i++;
				}
				$GLOBALS['list']=$nameList;
			?>
			
			
			<img src="left.png" alt="<" height="200" width="100">
			<?php 
				$j=0;
				if($GLOBALS['numberOfImages'] < 4){
					for($j=0 ; $j<$GLOBALS['numberOfImages'] ; $j++){
						echo "<img src=\"". $GLOBALS['list'][$j] ."\" alt=\"Smiley face\" height=\"250\" width=\"250\">";
					}
				}
				else{
					for($j=0 ; $j<4 ; $j++){
						echo "<img src=\"". $GLOBALS['list'][$j] ."\" alt=\"Smiley face\" height=\"250\" width=\"250\">";
					}
				}
			?>
			<img src="right.png" alt=">" height="200" width="100">
		</div>
		
		<ul class="leftnav">
		 <li><a class="active" href="#home">Home</a></li>
		 <li><a href="#news">News</a></li>
		 <li><a href="#contact">Contact</a></li>
		 <li><a href="#about">About</a></li>
		 <li> </li>
		 <li> </li>
		 <li> </li>
		 <li> </li>
		 <li> </li>
		 <li> </li>
		</ul>
		
		
		<form class="signup" action="login.html">
			<input type="submit" value="Sign In" />
		</form>
		
		<footer>
			<center>
			<pre>Copyright : Waste of time ; Don't read it </pre> 
		</footer>
		
	</body>
</html>