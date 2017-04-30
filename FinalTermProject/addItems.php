<?php
	include_once"menuContainer.php";

	echo '<form method="post" action="saveItem.php" enctype="multipart/form-data">
			<table>
			
				<tr><td>Name:</td><td><input type="text" name="name" placeholder="Name of the design"></td><br></tr>
				
			<!--	<tr><td>Path:</td><td><input type="text" name="path" placeholder="Design Image Location"></td><br></tr> -->
				
				<tr><td>Description:</td><td><input type="text" name="description" placeholder="Design description"></td><br></tr>
				
				<tr><td><input type="file" name="image"></td></tr>
				
				<tr><td><input type="submit" value="Submit"></td></tr>
			</table>
	</form>';
?>