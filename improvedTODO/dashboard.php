<!DOCTYPE html>

<?php
	session_start();
?>

<html>
	<title>Dashboard</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="w3.css">
	<link rel="stylesheet" href="todocss.css">
	
	
	<script type="text/javascript" src="todoScripts.js">
    </script> 
	
	<body>
	
		<p id="username" class="username"><?php if(isset($_POST['oldusername'])) echo htmlspecialchars($_POST['oldusername']); ?></p>
		<p id="errormssg"> </p>
		
		<div class="w3-row w3-border">
			<div class="w3-container w3-half w3-light-blue" id="currentActivities">
				
				
				
				<input type="button" onclick="testCreateJsonStringOfObjectList()" value="Print in console">
				
				
				<script></script>
				
			</div>
			
			<script>
				testInitialListCreator();
			</script>
			
			<div class="w3-container w3-half w3-light-grey">
				<input type="text" name="mainactivity" class="mainactivity" placeholder="Main Activity"><br>
				
				<div id="subactvities">
					<input type="text" name="subactivity" class="subactivity" placeholder="Subactivity" onchange="addDynamicSubactivityAdderFunction()"><br>
				</div>
				<br><br><br>
				
				<input type="submit" value="Add" name="AddButton" class="addbutton" onclick="addActivityToList()"> 
				<br><br><br><br><br><br><br><br><br><br> 
			</div>
		</div>

	</body>
	
	
</html>      
