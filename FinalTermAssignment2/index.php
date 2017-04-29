

<?php
session_start();
include_once("config.php");

$result= $mysqli->query("SELECT * FROM hotels ORDER BY id ASC");
?>

<!DOCTYPE html>

<html>
	<head>
		<title>Home</title>
		<meta charset="UTF-8">
		<script src='assignment.js' type='text/javascript'></script>
	</head>
	<body>
		<br>
		<br>
		<br>
		<br>
		<br>
		<h3 align='right'><input type='text' placeholder='Enter search details' id='searchString' /><button onclick='ajaxSearch()'>Search</button><p          /><a href='login.php'>Login</a></h3>
		<hr>
		<div align='center'>
			<h2><u>Hotel Info</u></h2>
			<br>
			<br>
			<br>
			<table border="2px" width = "80%" id='table'>
				<tr>
					<th>S.No.</th>
					<th>Hotel Name</th>
					<th>Stars</th>
					<th>Address</th>
					<th>Facilities</th>
				</tr>
				<?php 
	
				while($res = $result->fetch_object()) 
				{ 		
					echo "<tr>";
					echo "<td align='center'>".$res->id."</td>";
					echo "<td align='center'>".$res->hotelName."</td>";
					echo "<td align='center'>".$res->stars."</td>";	
					echo "<td align='center'>".$res->address."</td>";	
					echo "<td>";
					$facilities = explode(",",$res->facilities);
						echo "<ul align='left'>";
						foreach($facilities as $f){
							echo "<li>".$f."</li>";
						}
						echo "</ul>";	
					echo "</td>";	
					echo "</tr>";
					/*echo "<td>".$res->."</td>";	
					echo "<td><a href=\"edit.php?id=$res->id\">Update</a> | <a href=\"delete.php?id=$res->id\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a></td>";		
					*/
					
				}
				?>
			</table>
		</div>
	</body>
</html>


<!--
<html>
	<head>
	</head>
	<body>
	</body>
</html>
-->