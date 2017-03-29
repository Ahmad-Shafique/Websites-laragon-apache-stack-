/*
Function to add list item dynamically starts here
*/
	function dynamicListItemAdderFunction(){
		
		var divparent = document.getElementById("list");
		//console.log("parent fetched");
		var mainDiv = document.createElement('div');
		mainDiv.setAttribute('class','listItem');
		
		var inputAct = document.createElement('input');
		inputAct.setAttribute('type','text');
		inputAct.setAttribute('class','activityType');
		inputAct.setAttribute('name','activityType');
		inputAct.setAttribute('placeholder','Activity');
		
		var space = document.createTextNode(" ");
		
		var inputDur = document.createElement('input');
		inputDur.setAttribute('type','text');
		inputDur.setAttribute('class','duration');
		inputDur.setAttribute('name','duration');
		inputDur.setAttribute('placeholder','Duration');
		
		mainDiv.appendChild(inputAct);
		mainDiv.appendChild(space);
		mainDiv.appendChild(inputDur);
		
		divparent.appendChild(mainDiv);
		
	}
/*
Function to add list item dynamically ends here
*/