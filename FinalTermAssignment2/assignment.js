function ajaxSearch(){
	//console.log("Executing test ajax function");
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
			console.log('reply received : '+ xmlhttp.responseText);
			
			let elem = document.getElementById('table');
			elem.parentNode.removeChild(elem);
			
			let replyReceived = JSON.parse(xmlhttp.responseText);
			
			let td,tdText,ul,li,tr,th1,th2,th3,th4,th5,thText,trM;
			
			let body = document.body;
			
			let table = document.createElement('table');
			table.setAttribute('border','2px');
			table.setAttribute('width','80%');
			table.setAttribute('id','table');
			
			//console.log('Table created');
			
			trM = document.createElement('tr');
			th1 = document.createElement('th');
			th1.appendChild(document.createTextNode('S.No.'));
			trM.appendChild(th1);
			
			//console.log('SNo. column created');
			
			th2 = document.createElement('th');
			thText = document.createTextNode('Hotel Name');
			th2.appendChild(thText);
			trM.appendChild(th2);
			
			//console.log('Hotel Name column created');
			
			th3 = document.createElement('th');
			thText = document.createTextNode('Stars');
			th3.appendChild(thText);
			trM.appendChild(th3);
			
			//console.log('Stars column created');
			
			th4 = document.createElement('th');
			thText = document.createTextNode('Address');
			th4.appendChild(thText);
			trM.appendChild(th4);
			
			//console.log('Address column created');
			

			th5 = document.createElement('th');
			thText = document.createTextNode('Facilities');
			th5.appendChild(thText);
			trM.appendChild(th5);
			
			console.log('Facilities column created');
			
			table.appendChild(trM);
			
			//body.appendChild(table);
			
			//console.log('create')
			
			
			for(hotel of replyReceived){
				tr = document.createElement('tr');
				
				td = document.createElement('td');
				tdText = document.createTextNode(hotel.id);
				td.appendChild(tdText);
				tr.appendChild(td);
				
				td = document.createElement('td');
				tdText = document.createTextNode(hotel.hotelName);
				td.appendChild(tdText);
				tr.appendChild(td);
				
				td = document.createElement('td');
				tdText = document.createTextNode(hotel.stars);
				td.appendChild(tdText);
				tr.appendChild(td);
				
				td = document.createElement('td');
				tdText = document.createTextNode(hotel.address);
				td.appendChild(tdText);
				tr.appendChild(td);
				
				td = document.createElement('td');
				ul = document.createElement('ul');
				for(facilities of hotel.facilities){
					li = document.createElement('li');
					liText = document.createTextNode(facilities);
					li.appendChild(liText);
					ul.appendChild(li);
				}
				td.appendChild(ul);
				tr.appendChild(td);
				
				table.appendChild(tr);
			}
			
			
			body.appendChild(table);
		}
	}
	xmlhttp.open("POST","search.php",true);
	//console.log("POST method set");
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//console.log("request header set");
	xmlhttp.send("searchString=" + document.getElementById('searchString').value);
	//console.log("request sent");
	
}