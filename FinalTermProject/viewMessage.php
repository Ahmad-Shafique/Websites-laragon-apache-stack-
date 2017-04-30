		
<?php	

		include_once "menuContainer.php";
		
	echo '<table border="3px">
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Subject</th>
			<th>Message</th>
		</tr>';
		
		
		include_once "dbConfig.php";
		$sql = 'select * from messages';
		$result = $mysql->query($sql);

		foreach ($result as $rw){
			echo "<tr>";
			echo "<td>".$rw['name']."</td>";
			echo "<td>".$rw['email']."</td>";
			echo "<td>".$rw['subject']."</td>";
			echo "<td>".$rw['message']."</td>";
			echo "</tr>";
		}
		
	echo '</table>';
	
?>