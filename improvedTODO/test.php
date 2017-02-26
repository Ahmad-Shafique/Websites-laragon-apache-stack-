<!DOCTYPE html>




	
<html>
	<head>
		<title>Improved TODO </title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="w3.css">
		<link rel="stylesheet" href="todocss.css">

		<script type="text/javascript" src="todoScripts.js">
			var obj = {mainactivity:"",subactivity:[]};
		</script>	
	</head>
	
	<body>
		<div name="activity" value="Hello this is div"> div html
			<input type="text" name="mainactivity" class="mainactivity"><br>
			<input type="text" name="subactivity1" class="subactivity"><br>
			<input type="text" name="subactivity2" class="subactivity"><br>
			<input type="text" name="subactivity3" class="subactivity"><br>
			<input type="submit" value="Add" name="AddButton" class="addbutton" onclick="redirecttest()"> 
		</div>

			<br><br><br><br>Document Body here
	</body>
	
	<script>
		function redirecttest(){
			obj = addFunction();
			alert(obj.mainactivity);
		}
	</script>
	
	
	
	
</html>