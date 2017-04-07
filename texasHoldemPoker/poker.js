var numberOfPlayers;
var players = [];
var names = [] ; 
var holesDealt = [];
var communityCards = [];
var round ;
var cardSet = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var cardTypes = ['Black Spades','Red Spades','Black Heart','Red Heart'];
var smallBlind,bigBlind=0,potLimit,started=false,selectedPlayer=0;

function initialSetup(){
	numberOfPlayers = window.prompt("Enter number of players","3");

	for(let i=0 ; i<numberOfPlayers ; i++){
		names[i] = window.prompt("Enter the name of player "+i,'Player '+i);
	}
	
	potLimit = parseInt(window.prompt('Do you wish to set a pot limit ? If so, please enter the limit amount. Otherwise leave it blank','0'));

	round = 1;
}

function selectHole(){
	var hole = {};
	for(;;){
		let found= false;
		hole.name = cardSet[Math.round(Math.random()*12)];
		hole.type = cardTypes[Math.round(Math.random()*3)];
		let len = holesDealt.length;
		for(let i=0 ; i<len ; i++){
			if((hole.name === holesDealt[i].name) && (hole.type === holesDealt[i].type)) found = true;
		}
		if(found) continue;
		else break;
	}
	holesDealt.push(hole);
	return hole;
}

function dealHolesToPlayers(){
	for(let i=0 ; i<numberOfPlayers ; i++){
		var player = {};
		player.name = names[i];
		player.holes = [];
		for(let j=0 ; j<2 ; j++){
			/*
			var hole = {};
			hole.name = cardSet[Math.round(Math.random()*13)];
			hole.type = cardTypes[Math.round(Math.random()*4)];
			player.holes[j] = hole;
			*/
			player.holes[j] = selectHole();
			
			//console.log('hole:');
			//console.log(player.holes[j].name);
			//console.log(player.holes[j].type);
			//console.log('/hole');
		}
		player.betAmount = 0;
		player.amountInHand = 100;
		players[i] = player;
	}
	
	//console.log('Finished dealing holes to players');
	
}

function playerActionControl(action){

	if(action == 'call'){
		if(started){
			if(bigBlind != 0){
				if(playerBet(bigBlind)){
					changeSelectedPlayer();
				}
			}else{
				bigBlind = smallBlind*2;
				if(playerBet(bigBlind)){
					changeSelectedPlayer();
					document.getElementById('raise').removeAttribute('class');
				}
			}
		}else{
			smallBlind = window.prompt('Enter Small Blind Amount','40');
			if(playerBet(smallBlind)){
				changeSelectedPlayer();
				started = true;
			}
		}
	}
	else if(action == 'raise'){
		let raiseAmount = parseInt(window.prompt('Enter the raise amount',bigBlind+10));
		if(playerBet(raiseAmount)){
			bigBlind=raiseAmount;
			changeSelectedPlayer();
		}
	}
	else if(action == 'fold'){
		let playerToRemove = document.getElementsByName('playerHolder')[selectedPlayer];
		playerToRemove.parentNode.removeChild(playerToRemove);
		players.splice(selectedPlayer,1);
		numberOfPlayers--;
		if(selectedPlayer < numberOfPlayers-1)selectedPlayer++;else {selectedPlayer=0; increaseRound(); document.getElementsByName('addAmountButton')[selectedPlayer].disabled = false;}
		for(let i=0 ;  i<numberOfPlayers ; i++){
			console.log(players[i].name);
		}
	}
	else if(action == 'check'){
		changeSelectedPlayer();
	}
}

function deployPlayers(){
	
	//console.log('started player deployment');
	
	let parent = document.getElementById('playerHolder');
	let nP = players.length;
	for(let i=0 ; i<nP ; i++){
		
		//console.log('loop value (i) is : '+i);
		
		let main = document.createElement('h4');
		main.setAttribute('name','playerHolder');
		
		let name = document.createElement('h5')
		name.appendChild(document.createTextNode(players[i].name));
		name.setAttribute('name','playerName');
		main.appendChild(name);
		
		let amountBetDisplay = document.createElement('input');
		amountBetDisplay.setAttribute('type','number');
		amountBetDisplay.setAttribute('disabled','disabled');
		amountBetDisplay.setAttribute('placeholder','Amt in pot');
		amountBetDisplay.setAttribute('name','betAmount');
		main.appendChild(amountBetDisplay);
		
		let playerCurrentAmountDisplay = document.createElement('input');
		playerCurrentAmountDisplay.setAttribute('type','number');
		playerCurrentAmountDisplay.setAttribute('disabled','disabled');
		playerCurrentAmountDisplay.setAttribute('value',players[i].amountInHand);
		playerCurrentAmountDisplay.setAttribute('placeholder','Amt in hand');
		playerCurrentAmountDisplay.setAttribute('name','currentAmount');
		main.appendChild(playerCurrentAmountDisplay);

		let addButton  = document.createElement('button');
		addButton.setAttribute('name','addAmountButton');
		addButton.setAttribute('class','addAmountButton');
		addButton.setAttribute('disabled','disabled');
		addButton.setAttribute('onclick','addAmountToPlayerCurrentAmount()');
		main.appendChild(addButton);
		
		parent.appendChild(main);
	}
	
	//console.log('finished player deployment');
	
	let body = document.body;
	
	let playerControlsDiv = document.createElement('div');
	
	let call = document.createElement('button');
	call.appendChild(document.createTextNode('Call'));
	call.setAttribute('id','call');
	call.setAttribute('onclick','playerActionControl("call")');
	//call.setAttribute('class','hidden');
	playerControlsDiv.appendChild(call);
	
	let raise = document.createElement('button');
	raise.appendChild(document.createTextNode('Raise'));
	raise.setAttribute('id','raise');
	raise.setAttribute('onclick','playerActionControl("raise")');
	raise.setAttribute('class','hidden');
	playerControlsDiv.appendChild(raise);
	
	let fold = document.createElement('button');
	fold.appendChild(document.createTextNode('Fold'));
	fold.setAttribute('id','fold');
	fold.setAttribute('onclick','playerActionControl("fold")');
	playerControlsDiv.appendChild(fold);
	
	let check = document.createElement('button');
	check.appendChild(document.createTextNode('Check'));
	check.setAttribute('id','check');
	check.setAttribute('onclick','playerActionControl("check")');
	check.setAttribute('class','hidden');
	playerControlsDiv.appendChild(check);
	
	body.appendChild(playerControlsDiv);
}

function playerBet(amount){
	if(players[selectedPlayer].amountInHand >= amount){
		players[selectedPlayer].betAmount += parseInt(amount);
		players[selectedPlayer].amountInHand -= parseInt(amount);
		potLimit+=parseInt(amount);
		
		//console.log('Pot limit is : ' + potLimit);
		
		setValuesInDisplay();
		return true;
	}else{
		window.alert('You do not have sufficient money in hand. Add more and try again !!');
		return false;
	}
}

function changeSelectedPlayer(){
	document.getElementsByName('addAmountButton')[selectedPlayer].disabled = true;
	if(selectedPlayer < numberOfPlayers-1) selectedPlayer++;
	else {selectedPlayer = 0; increaseRound();}
	document.getElementsByName('addAmountButton')[selectedPlayer].disabled = false;
}

function setValuesInDisplay(){
	document.getElementsByName('betAmount')[selectedPlayer].value = null;
	document.getElementsByName('betAmount')[selectedPlayer].value = parseInt(players[selectedPlayer].betAmount);
	document.getElementsByName('currentAmount')[selectedPlayer].value =  players[selectedPlayer].amountInHand;
}

function addAmountToPlayerCurrentAmount(){
	let amt = window.prompt('How much would you like to add ?',100);
	var newAmount = parseInt(amt) + parseInt(players[selectedPlayer].amountInHand) ;
	document.getElementsByName('currentAmount')[selectedPlayer].value =  newAmount;
	players[selectedPlayer].amountInHand = newAmount;
}

function increaseRound(){
	round++;
	if(round == 2){
		
		console.log('Begin flop round');
		
		flop();
	}else if(round == 3){
		console.log('Begin turn round');
		
		turn();
	}else if(round == 4){
		console.log('Begin river round');
		
		river();
	}else if(round == 5){
		console.log('Showdown !!!');
		
		showDown();
	}
}

function dealCommunityCard(){
	let card = selectHole();
	let textValue = card.name + "::" + card.type;
	communityCards.push(card);
	let orderedList = document.getElementById('communityCardsDisplay');
	let li = document.createElement('li');
	let liValue = document.createTextNode(textValue);
	li.appendChild(liValue);
	orderedList.appendChild(li);
}

function dealFlop(){
	for(let i=0 ; i<3 ; i++){
		dealCommunityCard();
	}
}

function preFlop(){
	//console.log('Entered pre-Flop()');
	
	dealHolesToPlayers();
	deployPlayers();
	
	//console.log('Finished pre-Flop()')
}

function flop(){
	dealFlop();
	document.getElementById('check').removeAttribute('class');
}

function turn(){
	dealCommunityCard();
}

function river(){
	dealCommunityCard();
}

function showDown(){
	
}