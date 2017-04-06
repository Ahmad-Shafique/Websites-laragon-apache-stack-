var numberOfPlayers;
var players = [];
var names = [] ; 
var round ;
var cardSet = ['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
var cardTypes = ['Black Spades','Red Spades','Black Heart','Red Heart'];

function initialSetup(){
	numberOfPlayers = window.prompt("Enter number of players","3");

	for(let i=0 ; i<numberOfPlayers ; i++){
		names[i] = window.prompt("Enter the name of player "+i);
	}

	round = 1;
}

function dealHolesToPlayers(){
	
	console.log('Entered dealHolesToPlayers() ');
	
	console.log('number of players is : '+numberOfPlayers);
	
	for(let i=0 ; i<numberOfPlayers ; i++){
		
		console.log('loop i values is : '+i);
		
		var player = {};
		player.name = names[i];
		player.holes = [];
		for(let j=0 ; j<2 ; j++){
			var hole = {};
			hole.name = cardSet[Math.round(Math.random()*13)];
			hole.type = cardTypes[Math.round(Math.random()*4)];
			player.holes[j] = hole;
		}
		players[i] = player;
	}
	
	console.log('Finished dealing holes to players');
	
}

function deployPlayers(){
	
	console.log('started player deployment');
	
	let parent = document.getElementById('playerHolder');
	let nP = players.length;
	for(let i=0 ; i<nP ; i++){
		
		console.log('loop value (i) is : '+i);
		
		let main = document.createElement('h4');
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
		playerCurrentAmountDisplay.setAttribute('placeholder','Amt in hand');
		playerCurrentAmountDisplay.setAttribute('name','currentAmount');
		main.appendChild(amountBetDisplay);
		let addButton  = document.createElement('button');
		//addButton.appendChild(document.createTextNode('Plus'));
		addButton.setAttribute('name','addAmountButton');
		addButton.setAttribute('class','addAmountButton');
		main.appendChild(addButton);
		
		parent.appendChild(main);
	}
	
	console.log('finished player deployment');
	
}

function preFlop(){
	
	console.log('Entered pre-Flop()');
	
	dealHolesToPlayers();
	deployPlayers();
	
	console.log('Finished pre-Flop()')
	
	
}