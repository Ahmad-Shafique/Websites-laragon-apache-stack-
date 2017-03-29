
<?php
	session_start();
?>


<script type="text/javascript" src="timeBudgeter.js"></script>	
	
<html>
	<head>
		<title>Time Budgeter</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="w3.css">
		<link rel="stylesheet" href="timeBudgeter.css">
	</head>
	
	<body>
		<div class="w3-row w3-border w3-display-middle">
			<form id="list" action="" method="post">
				<div class="listItem">
					<input type="text" class="activityType" name="activityType" placeholder="Activity">
					<input type="text" class="duration" name="duration" placeholder="Duration">
				</div>
			</form>
			<button class="addListItem" onclick="dynamicListItemAdderFunction()">
		</div>
		
	</body>
	

	
	
	
	
</html>