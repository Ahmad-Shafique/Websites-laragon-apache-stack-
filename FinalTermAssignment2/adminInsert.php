<?php session_start(); ?>
<html>
	<head>
		<title>Admin</title>
	</head>
	<body>
		<h2 align="center">Admin</h2>
		<br>
		<h3 align="right"><a href='index.php' onClick='<?php unset($_SESSION['username']); unset($_SESSION['password']); ?>'>Logout</a></h3>
		<hr>
		<div align="right">
			<a href=""><u><b>Insert</b></u></a> | <a href="adminUpdate.php">Update</a> |<a href="adminDelete.php">Delete</a> 
		</div>
		<br>
		<br>
		<form action="insertValue.php" method="post">
			<table>
				<tr>
					<td>Hotel Name : </td>
					<td><input type="text" name="hotelName"></td>
				</tr>
				<tr>
					<td>Star : </td>
					<td><input type="number" name="stars" size="1"></td>
				</tr>
				<tr>
					<td>Address : </td>
					<td><input type="text" name="address"></td>
				</tr>
				<tr>
					<td>Facilities : </td>
					<td>
						<textarea name="facilities" width="50px" height="100px"  rows="10" placeholder="Facilities separated by commas" ></textarea>
					</td>
				</tr>
			</table>
			<input type="submit" value="Insert">
		</form>
		<?php
			if(isset($_SESSION['inserted'])){
				echo $_SESSION['inserted'];
				unset($_SESSION['inserted']);
			}
		?>
	</body>
</html>