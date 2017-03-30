<?php
session_start();
include_once("config.php");

$result= $mysqli->query("SELECT * FROM hotels ORDER BY id ASC");
?>

<!DOCTYPE html>

<html>
	<head>
		<title>Admin</title>
	</head>
	<body>
		<h2 align='center'>Admin</h2>
		<br>
		<br>
		<br>
		<br>
		<h3 align='right'><a href='index.php' onClick='<?php unset($_SESSION['username']); unset($_SESSION['password']); ?>'>Logout</a></h3>
		<hr>
		<div align='center'>
			<h2><u>Hotel Info</u></h2>
			<br>
			<br>
			<br>
			<table border="2px" width = "80%">
				<tr>
					<th>Hotel Name</th>
					<th>Hotel ID</th>
					<th>Action</th>
				</tr>
				<?php 
	
				while($res = $result->fetch_object()) 
				{ 		
					echo "<tr>";
					echo "<td align='center'>".$res->hotelName."</td>";
					echo "<td align='center'>".$res->id."</td>";
					echo "<td align='center'> <a href=\"deleteValue.php?id=".$res->id."\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a></td>";		
					echo "</tr>";
				}
				?>
			</table>
		</div>
		
		<?php
			if(isset($_SESSION['deleted'])){
				echo $_SESSION['deleted'];
				unset($_SESSION['deleted']);
			}
		?>
	</body>
</html>
