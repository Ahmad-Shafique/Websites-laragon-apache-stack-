<?php
	include_once "menuContainer.php";
	
	echo '<link rel="stylesheet" href="contactUs.css">';
		
	echo '
	<div class="main container">
		<div class="top container">
			<h1>Contact Us</h1>
		</div>
		<div class="items container">
			<form method="post" action="sendMessage.php">
				<div class="item container">
					<div class="text sub">
						Name:
					</div >
					<div class="input sub">
						<input type="text" name="name" placeholder="Jack">
					</div>
				</div>
				<div class="item container">
					<div class="text sub">
						Email:
					</div >
					<div class="input sub">
						<input type="email" name="email" placeholder="jack@gmail.com">
					</div>
				</div>
				<div class="item container">
					<div class="text sub">
						Subject: 
					</div >
					<div class="input sub">
						<input type="text" name="subject" placeholder="Purchase">
					</div>
				</div>
				<div class="item container">
					<div class="text sub">
						Message: 
					</div>
					<div class="input sub">
						<textarea name="message" placeholder="I am interested in purchasing your design"></textarea>
					</div>
				</div>
				<div class="item container">
					<div class="button">
						<input type="submit" value="Send">
					</div>
				</div>
			</form>
		</div>
	</div>';
	
	
?>