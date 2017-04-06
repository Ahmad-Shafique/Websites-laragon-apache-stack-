"use strict"

function generateRandomNumber(minimumValue,maximumValue){
	return Math.floor((Math.random()*maximumValue)+minimumValue);
}

function rollTwoDice(){
	return generateRandomNumber(1,6) + generateRandomNumber(1,6);
}

function nextPlayer(currentPlayer,totalPlayers){
	if(currentPlayer<totalPlayers-1) return currentPlayer+1;
	else  return 0;
}

function setInitialStatus(){
	//console.log("Executing current Player Name setting");
	document.getElementById('currentPlayer').innerHTML = "Current Player : "+ playerNames[currentPlayer];
	comeOut=true;
	pointTarget=0;
	//console.log("Name set in proper DOM element");
}

function rollDiceButtonClick(){
	var result = rollTwoDice();
	if(comeOut){
		//Come Out Phase
		
		if(result == 7 || result == 11){
			//Win condition
			document.getElementById('result').innerHTML = "You Win :D ";
			//document.getElementById('rollButton').removeEventListener('onclick');
			removeRollDiceButton();
		}
		else if(result == 2 || result == 3 || result == 12){
			//Lose contdition
			document.getElementById('result').innerHTML = "You lose !!!";
			//document.getElementById('rollButton').removeEventListener('onclick');
			removeRollDiceButton();
		}
		else{
			pointTarget=result;
			comeOut = false;
			document.getElementById('result').innerHTML = "Result : " + result + "      Point target Set !!!";
		}
		
	}
	else{
		//Point phase
		
		if(result == 7 || result == 11){
			//Lose condition
			document.getElementById('result').innerHTML = "You lose !!!";
			//document.getElementById('rollButton').removeEventListener('onclick');
			removeRollDiceButton();
		}
		else if(result == pointTarget){
			//win contdition
			document.getElementById('result').innerHTML = "You Win :D ";
			//document.getElementById('rollButton').removeEventListener('onclick');
			removeRollDiceButton();
		}
		else{
			//Go to next player condition
			pointTarget=0;
			comeOut = true;
			setNextPlayer();
		}
	}
	
	document.getElementById('rollButton').setAttribute('display','none');
	
	//console.log('current player number before changing : ',currentPlayer);
	//console.log('total number of players before changing : ',numberOfPlayers);
	//console.log('resultant next player is '+res );
	//console.log("Current player : Player " + currentPlayer);
	
}

function setNextPlayer(){
	currentPlayer = nextPlayer(currentPlayer,numberOfPlayers);
	setInitialStatus();
	document.getElementById('result').innerHTML ="";
}

function removeRollDiceButton(){
	var elem = document.getElementById('rollButton');
    elem.parentNode.removeChild(elem);
}