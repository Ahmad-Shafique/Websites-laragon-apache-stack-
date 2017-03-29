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
			<a href="adminInsert.php"><b>Insert</b></a> | <a href="">Update</a> |<a href="adminDelete.php">Delete</a> 
		</div>
		<div align="center">
			<form action="updateValue.php" method="post">
				<table>
					<tr>
						<td>Hotel Name : </td>
						<td><input type="text" name="hotelName" value="<?php 
																	if(isset($_SESSION['hotelName']))
																		echo $_SESSION['hotelName']?>">
						</td>
					</tr>
					<tr>
						<td>Stars : </td>
						<td><input type="number" name="star" value="<?php 
																	if(isset($_SESSION['star']))
																		echo $_SESSION['star']?>">
						</td>
					</tr>
					<tr>
						<td>Address : </td>
						<td><input type="text" name="address" value="<?php 
																	if(isset($_SESSION['address']))
																		echo $_SESSION['address']?>">
						</td>
					</tr>
					<tr>
						<td>Facilities : </td>
						<td><textarea name="facilities" width="50px" height="100px"  rows="5" placeholder="Facilities separated by commas" value="<?php 
																	if(isset($_SESSION['facilities']))
																		echo $_SESSION['facilities']?>"></textarea> 
						</td>
					</tr>
				</table>
				<input type="submit" value="Update">
			</form>
		</div>
		<?php
			if(isset($_SESSION['updated'])){
				echo $_SESSION['updated'];
				unset($_SESSION['updated']);
			}
		?>
	</body>
</html>

<?php 
$_SESSION['hotelName'] = null;
$_SESSION['star'] = null;
$_SESSION['address'] = null;
$_SESSION['facilities'] = null;
?>