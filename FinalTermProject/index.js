function homePress(){
}

function aboutMePress(){
}

function loginPressed(){
	console.log('Login button pressed');
	user = prompt("Username","admin");
	pass = prompt("Password","******");
	

	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//console.log("xml request created");
	xmlhttp.onreadystatechange=function() {
		//console.log("ready state changed");
		if (xmlhttp.readyState==4) {
			console.log("Received reply : "+xmlhttp.responseText);
			//console.log(xmlhttp.responseText);
			if (xmlhttp.responseText == 1) {
				//Success condition
				console.log('Logged in');
				window.location = 'index.php';
				
			}
			else {
				//console.log("Failed to update DB");
				//Failure condition
				console.log('invalid info');
			}
			
		}
	}
	xmlhttp.open("POST","loginValidator.php",true);
	//console.log("POST method set");
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//console.log("request header set");
	xmlhttp.send('user='+user+'&pass='+pass);
	//console.log("request sent");
}