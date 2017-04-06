<!DOCTYPE html>

<html>
	<head>
		<title>Player Selection</title>
		<script type="text/javascript" src="craps.js"></script>
	</head>
	
	<body>
		<script type="text/javascript">
			var numberOfPlayers = window.prompt("Please Enter the number of players","2");
			var playerNames = [];
			for(var i=0 ; i<numberOfPlayers ; i++){
				playerNames[i] = window.prompt("Enter name for player "+(i+1));
			}
			
			/*
			for(var i=0 ; i<numberOfPlayers ; i++){
				window.alert(playerNames[i]);
			}
			*/
			
			var currentPlayer = 0;
			console.log('Executed first script block');
			var comeOut = true;
			var pointTarget = 0;
		</script>
		<h2 id="currentPlayer">Current Player </h2>
		<button onclick="rollDiceButtonClick()" id="rollButton">Roll The 2 Dice</button>
		<h3 id='result'></h3>
	</body>
</html>


<script type="text/javascript">
	setInitialStatus();
</script>

