"use strict";
        function tickfn(){

            var c = document.body.childNodes;
            var i,str="";
            for (i = 0; i < c.length; i++) {
                c[i].innerHTML="tickfn change";
            }
            //var c[0].innerHTML=str;
        }
        
        function chgtxt(){
            this.innerHTML="Mouse entered !!!";
        }
        
        function ttfn(){ 
            var c = document.body.childNodes;
            
            var d = c[0].childNodes;
            var i,str="";
            for (i = 0; i < d.length; i++) {
                 d[i].innerHTML="xtc";
            }
            //var c[0].innerHTML=str;
        }
        
        function tstfn(){
            /*
            var str="Hello";
            alert(str);
            //alert("Hello");
            var str2=a.parentNode.innerHTML;
            alert(str2);
            */
            
            //var parent = a.parentNode;
            //var parent = document.body;
            /* 
            var otpt = document.getElementsByClassName("mainactivity").value;
            var o = otpt[0].value;
            alert(o); 
            */
            
            
            
            
            
            //WORKING PIECE OF CODE
            /*
            var strr = document.getElementsByClassName("mainactivity")[0].value;
            alert(strr);
            var i=0;
            var elems = document.getElementsByClassName("subactivity");
            var length = elems.length;
            for(i=0 ; i<length ; i++ ) strr += " " + elems[i].value;
            alert(strr);
            */
            
            
            
            
            //NOT WORKING PIECE OF CODE
            /*
            var str=document.getElementsByClassName("mainactivity")[0].value ;
            alert(str);
            str+=" ";
            var children = document.getElementsByClassName("subactivity");
            var i=0,l=children.length;
            for(i=0 ; i<l ; i++){
                str += children[i].value + " ";
            } 
            alert(str);
            */
        }
        
        function addFunction(){
            /*
            var ma = document.getElementsByClassName("mainactivity")[0].value;
            //alert(ma);
            var sa = document.getElementsByClassName("subactivity");
            var l = sa.length;
            var strr="";
            var i=0;
            //alert(ma);
            var o = {mainactivity:ma,subactivity:[]};
            //alert(ma);
            for(i=0 ; i<l ; i++){
                o.subactivity[i] = sa[i].value;
            }
            //alert(ma);
            */
            
            
            //console.log("started addFn");
            var ma = document.getElementsByClassName("mainactivity")[0].value;
            var o = {mainactivity:ma,subactivity:[]};
            o.mainactivity = ma;
            var sa = document.getElementsByClassName("subactivity");
            var l = sa.length , i=0;
            //console.log("reached before for loop");
            //console.log(o.mainactivity);
            for(i=0 ; i<l ; i++){
                //alert(i);
                o.subactivity[i] = sa[i].value;
                //console.log(o.subactivity[i]);
            }
            //console.log("Reached before return");
            
            
            return o;
        }
        
        function addActivityNode(){
			
			/*
            var obj = addFunction();
            console.log("addFunction executed successfully");
            var parent = document.body.getElementsByClassName("activities")[0];
            console.log("Parent defined");
            console.log(obj.mainactivity);
            var str = "<p>"+ obj.mainactivity +"</p><br>";
            console.log("Str created");
            var i=0 , length = obj.subactivity.length;
            console.log("vars declared");
            for(i=0; i<length; i++){
                str+= " &nbsp &nbsp <p>"+obj.subactivity[i]+"</p><br>";
            }
            console.log("loop completed");
            parent.innerHTML=str;
            console.log("innerHTML now has the code");
			*/
			
			
			var obj = addFunction();
            console.log("addFunction executed successfully");
            var parent = document.getElementById("activities");
			var pmac = document.createElement("p");
			pmac.addEventListener('click',activityClickEvent);
			var mac = document.createTextNode(obj.mainactivity);
			var br = document.createElement("br");
			pmac.appendChild(mac);
			parent.appendChild(pmac);
			//parent.appendChild(br);
			
			var i=0 , length = obj.subactivity.length;
            console.log("vars declared");
            for(i=0; i<length;	i++){
				var paac = document.createElement("p");
				paac.setAttribute("class","sub");
				//paac.style.backgroundColor = "green"; //works
				console.log(paac.getAttribute("class"));
				var aac = document.createTextNode(obj.subactivity[i]);
				//var br = document.createElement("br");
				paac.appendChild(aac);
				paac.addEventListener('click',activityClickEvent);
				parent.appendChild(paac);
				console.log("child appended");
				//parent.appendChild(br);
            }
        }
		
		function activityClickEvent(){
			//if(this.childNodes[0].tagNam)
			var s = document.createElement("s");
			var txt = document.createTextNode(this.innerHTML);
			this.innerHTML="";
			s.appendChild(txt);
			this.appendChild(s);
			console.log(this.innerHTML);
			
			this.parentNode.removeChild(this);
			
			//////////Eventlistener removal doesn't work
			this.removeEventListener(this,activityClickEvent);
		}
		
		
		
		function testAjaxFunction() {
			/*
			the ajax function queries a php file
			php file in turn queries mysql database
			php returns 1 or 0 depending on query success or failure
			the function processes the reply accourdingly
			*/
			console.log("Executing test ajax function");
			var xmlhttp;
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}
			else {// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			console.log("xml request created");
			xmlhttp.onreadystatechange=function() {
				console.log("ready state changed");
				if (xmlhttp.readyState==4) {
					if (xmlhttp.responseText == 1) {
						document.getElementById('usernamemessage').innerHTML = "PHP returned 1";
					}
					else {
						document.getElementById('usernamemessage').innerHTML = "PHP returned 0";
					}
				}
			}
			xmlhttp.open("POST","testAjaxValidate.php",true);
			console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			console.log("request header set");
			xmlhttp.send("username=" + document.getElementById('newusername').value);
			console.log("request sent");
			
		}
		
		
		
		function testRegex(){
			
			///000000000000000000		Matching <h3></h3>
			/*
			var str = document.getElementById('1').innerHTML;
			var patt1 = /<h3.*h3>/g;
			var result = str.match(patt1);
			var res = "";
			for(var i=0 ; i<result.length ; i++){
				var regpatinner = />.*</g;
				var intermediary = result[i].match(regpatinner);
				var il = intermediary.length;
				var fin = intermediary[0].replace(/>?<?/g, '');
				res+=fin;
				res+="\n";
			}
			console.log(res);
			*/
			
			
			///00000000000000000		Matching <p></p>
			/*
			var str = document.getElementById('1').innerHTML;
			var patt1 = /<p.*p>/g;
			var result = str.match(patt1);
			var res = "";
			for(var i=0 ; i<result.length ; i++){
				var regpatinner = />.*</g;
				var intermediary = result[i].match(regpatinner);
				var il = intermediary.length;
				var fin = intermediary[0].replace(/>?<?/g, '');
				res+=fin;
				res+="\n";
			}
			console.log(res);
			*/
			
			
			///0000000000000000			Matching both h3 and p tags under 2 separate strings
			/*
			var str = document.getElementsByClassName('activity');
			var mstr="",sstr="",ml=str.length;
			
			for(var j=0 ; j<ml ; j++){
				var patt1 = /<h3.*h3>/g;
				var patt2 = /<p.*p>/g;
				var mresult = str[j].innerHTML.match(patt1);
				var sresult = str[j].innerHTML.match(patt2);
				for(var i=0 ; i<mresult.length ; i++){
					var regpatinner = />.*</g;
					var intermediary = mresult[i].match(regpatinner);
					var il = intermediary.length;
					var fin = intermediary[0].replace(/>?<?/g, '');
					mstr+=fin;
					mstr+="\n";
				}
				for(var i=0 ; i<sresult.length ; i++){
					var regpatinner = />.*</g;
					var intermediary = sresult[i].match(regpatinner);
					var il = intermediary.length;
					var fin = intermediary[0].replace(/>?<?/g, '');
					sstr+=fin;
					sstr+="\n";
				}
			}
			
			console.log(mstr);
			console.log(sstr);
			*/
			
			
			
			
			var str = document.getElementsByClassName('activity');
			var mstr="",sstr="",ml=str.length;
			var objlist = {list:[]};
			
			for(var j=0 ; j<ml ; j++){
				var obj={mainactivity:"",subactivity:[]};
				var patt1 = /<h3.*h3>/g;
				var patt2 = /<p.*p>/g;
				var mresult = str[j].innerHTML.match(patt1);
				var sresult = str[j].innerHTML.match(patt2);
				for(var i=0 ; i<mresult.length ; i++){
					var regpatinner = />.*</g;
					var intermediary = mresult[i].match(regpatinner);
					var il = intermediary.length;
					var fin = intermediary[0].replace(/>?<?/g, '');
					obj.mainactivity = fin;
				}
				for(var i=0 ; i<sresult.length ; i++){
					var regpatinner = />.*</g;
					var intermediary = sresult[i].match(regpatinner);
					var il = intermediary.length;
					var fin = intermediary[0].replace(/>?<?/g, '');
					obj.subactivity[i] =fin;
				}
				
				objlist.list[j]=obj;
			}
			
			var otpt = JSON.stringify(objlist);
			console.log(otpt);
			//testWriteJsonToFile(otpt);
			var revotpt = JSON.parse(otpt);
			console.log(revotpt);
			//console.log(mstr);
			//console.log(sstr);
		}

		
		
		
		function testAddActivity(){
			
			var obj;
			var placementNode = document.getElementById('currentActivities');
			console.log('Entered testAddActivity and fetched patrent node');
			
				var div = document.createElement('div');
				div.setAttribute("class","activity");
				var h3 = document.createElement('h3');
				h3.appendChild(document.createTextNode(document.getElementsByClassName('mainactivity')[0].value));
				div.appendChild(h3);
				console.log('Appended main activity to newly created node');
				var tickbox = document.createElement('input');
				tickbox.setAttribute('type','checkbox');
				//tickbox.setAttribute('class','custom');
				div.appendChild(tickbox);
				let subac = document.getElementsByClassName('subactivity');
				let ln = subac.length;
				for(let i=0; i<ln ; i++){
					var p = document.createElement('p');
					//p.setAttribute('class','done');
					p.appendChild(document.createTextNode(subac[i].value));
					div.appendChild(p);
				}
				console.log('Appended all subactivities');
				placementNode.appendChild(div);
				console.log('Done adding activity to activity list');
		}
		
		
		function testGetDataFromActivityDiv(){
			console.log(document.getElementsByClassName('activity')[0].innerHTML);
		}
		
		
		
		function testCreateJsonStringOfObjectList(){
				
				//Fetch all complex activities into an array
				var str = document.getElementsByClassName('activity');
				
				//Declare necessary variables
				var mstr="",sstr="",ml=str.length;
				var objlist = {list:[]};
				
				//Loop though comlex DOM elemets , create JS objects from them
				for(var j=0 ; j<ml ; j++){
					
					var obj={mainactivity:"",subactivity:[]};
					var patt1 = /<h3.*h3>/g;
					var patt2 = /<p>[+=a-z0-9A-Z -]*<\/p>/gm;
					var mresult = str[j].innerHTML.match(patt1);
					var sresult = str[j].innerHTML.match(patt2);
					
					//Add the mainactivity part of the objects ==== Loop unnecessary as there is only one mainactivity
					for(var i=0 ; i<mresult.length ; i++){
						var regpatinner = />.*</g;
						var intermediary = mresult[i].match(regpatinner);
						var il = intermediary.length;
						var fin = intermediary[0].replace(/>?<?/g, '');
						obj.mainactivity = fin;
					}
					
					
					
					//Loop through and add the subactivity parts of the object
					let sl = sresult.length ;
					for(var i=0; i<sl; i++){
						var regpatinner = />.*</;
						var intermediary = sresult[i].match(regpatinner);
						var fin = intermediary[0].replace(/>?<?/g, '');;
						if(fin!=""){
							//console.log(fin);
							//console.log("Subactivity: "+fin);
							obj.subactivity[i] =fin;
							fin="";
						}
						
					}
					
					//Object ready , add to object list
					objlist.list[j]=obj;
				}
				
				//Object list ready... now jsonify the list
				var otpt = JSON.stringify(objlist);
				return otpt;
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//#######################     TEST FUNCTIONS ABOVE THIS LINE ONLY		#################################
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*
		Function to add subactivity input tag dynamically starts here
		*/
		function addDynamicSubactivityAdderFunction(){
			
			/*
			// Get the element, add a click listener...
			document.getElementById("parent-list").addEventListener("click", function(e) {
				// e.target is the clicked element!
				// If it was a list item
				if(e.target && e.target.nodeName == "LI") {
					// List item found!  Output the ID!
					console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
				}
			});
			*/
			
			//console.log("Entered fn()");
			var divparent = document.getElementById("subactvities");
			//console.log("parent fetched");
			var subac = document.createElement("input");
			
			//console.log("element created");
			subac.setAttribute("type","text");
			subac.setAttribute("class","subactivity");
			subac.setAttribute("placeholder","Subactivity");
			subac.setAttribute("onchange","addDynamicSubactivityAdderFunction()");
			//console.log("attributes added");
			divparent.appendChild(subac);
			
			divparent.appendChild(document.createElement("br"));
			//console.log("child appended");
		}
		/*
		Function to add subactivity input tag dynamically starts here
		*/
		
		
		
		
		/*
		AJAX function to create new valid user starts here
		*/
		function newUsernameAjaxValidator() {
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
					if (xmlhttp.responseText == 1) {
						document.getElementById('newusernamemessage').innerHTML = "Successful !!!";
						document.getElementById('newUserName').submit();		//8888888888888888	New username created , so log the new user in 
					}
					else {
						//document.getElementById('usernamemessage').innerHTML = xmlhttp.responseText;
						document.getElementById('newusernamemessage').innerHTML = "Username already exists !!!";
					}
				}
			}
			xmlhttp.open("POST","newUsernameValidator.php",true);
			//console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//console.log("request header set");
			//console.log(document.getElementById('newusername').value);
			xmlhttp.send("username=" + document.getElementById('newusername').value);
			//console.log("request sent");
			
		}
		/*
		AJAX function to create new valid user ends here
		*/
		
		
		
		/*
		AJAX function to validate and log in a previously registered user starts here
		*/
		function oldUsernameAjaxValidator() {
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
					if (xmlhttp.responseText == 1) {
						document.getElementById('oldusernamemessage').innerHTML = "Logged in !!!";
						
						//Validation successful , now log in the user
						document.getElementById('oldUserName').submit();
					}
					else {
						//document.getElementById('usernamemessage').innerHTML = xmlhttp.responseText;
						document.getElementById('oldusernamemessage').innerHTML = "Username not found !!!";
					}
				}
			}
			xmlhttp.open("POST","oldUsernameValidator.php",true);
			//console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//console.log("request header set");
			//console.log(document.getElementById('oldusername').value);
			xmlhttp.send("username=" + document.getElementById('oldusername').value);
			//console.log("request sent");
			
		}
		/*
		AJAX function to validate and log in a previously registered user starts here
		*/
		
		
		
		
		/*
		Initial TODO list populator function starts here
		*/
		function initialListCreator(){
			//console.log("Executing List creator function");
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
					if (xmlhttp.responseText != 0) {
						//Successfully fetched todo string !!! Got a JSON string as reply instead of a 0 . Now decompose and display
						
						var objlist = JSON.parse(xmlhttp.responseText);
						var obj;
						var placementNode = document.getElementById('currentActivities');
						for(obj of objlist.list){
							var div = document.createElement('div');
							div.setAttribute("class","activity");
							var h3 = document.createElement('h3');
							h3.appendChild(document.createTextNode(obj.mainactivity));
							h3.addEventListener('click',mainActivityClickEvent);
							div.appendChild(h3);
							//var tickbox = document.createElement('input');
							//tickbox.setAttribute('type','checkbox');
							//div.appendChild(tickbox);
							let subac;
							for(subac of obj.subactivity){
								var p = document.createElement('p');
								p.appendChild(document.createTextNode(subac));
								p.addEventListener('click',subActivityClickEvent);
								div.appendChild(p);
							}
							placementNode.appendChild(div);
						}
						
						//document.getElementById('errormssg').innerHTML = xmlhttp.responseText;
						
					}
					else {
						//No todo list found . Do Nothing !!!
					}
				}
			}
			xmlhttp.open("POST","initialTodoDatabaseInfoFetch.php",true);
			//console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//Retrieve the username and send
			xmlhttp.send("username=" + document.getElementById('username').innerHTML);
		}
		/*
		Initial TODO list populator function ends here
		*/
		
		
		
		
		/*
		Function for action of add activity starts here
		*/
		function addActivity(){
			
			var obj;
			//fetch the root element
			var placementNode = document.getElementById('currentActivities');
			//console.log('Entered testAddActivity and fetched patrent node');
			
			//create the root activiy element and set attribute
				var div = document.createElement('div');
				div.setAttribute("class","activity");
				
				//create the main activity element and append to root
				var h3 = document.createElement('h3');
				h3.appendChild(document.createTextNode(document.getElementsByClassName('mainactivity')[0].value));
				div.appendChild(h3);
				//console.log('Appended main activity to newly created node');
				
				//Add the tickbox required				
				var tickbox = document.createElement('input');
				tickbox.setAttribute('type','checkbox');
				div.appendChild(tickbox);
				
				//fetch the info of all subactivities
				let subac = document.getElementsByClassName('subactivity');
				let ln = subac.length;
				
				//create one at a time the subactivity nodes and append to root activity node
				for(let i=0; i<ln ; i++){
					var p = document.createElement('p');
					//p.setAttribute('class','done');
					p.appendChild(document.createTextNode(subac[i].value));
					p.addEventListener('click',subActivityClickEvent);
					div.appendChild(p);
				}
				
				//Finished adding all necessary nodes... no push the new complex activity to the parent
				
				//console.log('Appended all subactivities');
				placementNode.appendChild(div);
				//console.log('Done adding activity to activity list');
		}
		/*
		Function for action of add activity ends here
		*/
		
		
		
		

		/*
			Function to make a JSON string of object list from all DOM div "activity" elements starts here
		*/
			function createJsonStringOfObjectList(){
				
				//Fetch all complext activities into an array
				var str = document.getElementsByClassName('activity');
				
				//Declare necessary variables
				var mstr="",sstr="",ml=str.length;
				var objlist = {list:[]};
				
				//Loop though comlex DOM elemets , create JS objects from them
				for(var j=0 ; j<ml ; j++){
					var obj={mainactivity:"",subactivity:[]};
					var patt1 = /<h3.*h3>/g;
					var patt2 = /<p>[+=a-z0-9A-Z -]*<\/p>/gm;
					var mresult = str[j].innerHTML.match(patt1);
					var sresult = str[j].innerHTML.match(patt2);
					
					//Add the mainactivity part of the objects ==== Loop unnecessary as there is only one mainactivity
					for(var i=0 ; i<mresult.length ; i++){
						var regpatinner = />.*</g;
						var intermediary = mresult[i].match(regpatinner);
						var il = intermediary.length;
						var fin = intermediary[0].replace(/>?<?/g, '');
						obj.mainactivity = fin;
					}
					
					
					
					//Loop through and add the subactivity parts of the object
					let sl = sresult.length ;
					for(var i=0; i<sl; i++){
						var regpatinner = />.*</;
						var intermediary = sresult[i].match(regpatinner);
						var fin = intermediary[0].replace(/>?<?/g, '');;
						if(fin!=""){
							//console.log(fin);
							//console.log("Subactivity: "+fin);
							obj.subactivity[i] =fin;
							fin="";
						}
						
					}
					
					//Object ready , add to object list
					objlist.list[j]=obj;
				}
				
				//Object list ready... now jsonify the list
				var otpt = JSON.stringify(objlist);
				return otpt;
			}
		/*
			Function to make a JSON string of object list from all DOM div "activity" elements ends here
		*/
		
		
		
		
		
		/*
			AJAX Function to asynchronously update the database json string starts here
		*/
		
		/*
		Helper function (for using multiple parameters) starts here
		*/
			function formatParams( params ){
			  return Object
					.keys(params)
					.map(function(key){
					  return key+"="+params[key]
					})
					.join("&")
			}
			/*
			var endpoint = "https://api.example.com/endpoint"
			var params = {
			  a: 1, 
			  b: 2,
			  c: 3
			}

			var url = endpoint + formatParams(params)
			//=> "https://api.example.com/endpoint?a=1&b=2&c=3"
			*/
		/*
		Helper function (for using multiple parameters) ends here
		*/
			function updateDatabaseJsonStringAsynchronously(){
				var jsonData = createJsonStringOfObjectList();

				console.log("Executing test ajax function");
				var xmlhttp;
				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}
				else {// code for IE6, IE5
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				console.log("xml request created");
				xmlhttp.onreadystatechange=function() {
					console.log("ready state changed");
					if (xmlhttp.readyState==4) {
						console.log("Received reply : "+xmlhttp.responseText);
						
						if (xmlhttp.responseText == 1) {
							//Success condition
						}
						else {
							//console.log("Failed to update DB");
							//Failure condition
						}
						
					}
				}
				xmlhttp.open("POST","asynchronousDatabaseJsonDataUpdater.php",true);
				//console.log("POST method set");
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				console.log("request header set");
				var params = {username : document.getElementById('username').innerHTML, todo : createJsonStringOfObjectList()};
				xmlhttp.send(formatParams(params));
				console.log("request sent");
			}
		/*
			AJAX Function to asynchronously update the database json string ends here
		*/
		
		
		
		
		
		/*
			Function to handle click event on subactivity starts here
		*/
			function subActivityClickEvent(){
				this.setAttribute('class','done');
			}
		/*
			Function to handle click event on subactivity ends here
		*/
		
		
		
		
		
		/*
			Function to handle click event on mainactivity starts here
		*/
			function mainActivityClickEvent(){
				var par= this.parentNode;
				var chld=par.childNodes;
				var len = chld.length;
				for(var i=0 ; i<len ; i++){
					chld[i].setAttribute('class','done');
				}
			}
		/*
			Function to handle click event on mainactivity ends here
		*/
		
		
		
		
		
		
		/*
			Function to add user modified activity to list starts here
		*/
			function addActivityToList(){
				var obj;
				var placementNode = document.getElementById('currentActivities');
				//console.log('Entered AddActivity and fetched parent node');
			
				var div = document.createElement('div');
				div.setAttribute("class","activity");
				var h3 = document.createElement('h3');
				h3.appendChild(document.createTextNode(document.getElementsByClassName('mainactivity')[0].value));
				div.appendChild(h3);
				//console.log('Appended main activity to newly created node');
				var tickbox = document.createElement('input');
				tickbox.setAttribute('type','checkbox');
				//tickbox.setAttribute('class','custom');
				div.appendChild(tickbox);
				let subac = document.getElementsByClassName('subactivity');
				let ln = subac.length;
				for(let i=0; i<ln ; i++){
					var p = document.createElement('p');
					//p.setAttribute('class','done');
					p.appendChild(document.createTextNode(subac[i].value));
					p.addEventListener('click',subActivityClickEvent);
					div.appendChild(p);
				}
				//console.log('Appended all subactivities');
				placementNode.appendChild(div);
				//console.log('Done adding activity to activity list');
				updateDatabaseJsonStringAsynchronously();
			}
		/*
			Function to add user modified activity to list ends here
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//000000000000000000000000000000000		Extra functions - Might be useful later		000000000000000000000000000000
		function arrayHasOwnIndex(array, prop) {
			return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
		}
		
		
		//Function to write to file
		function writefile(){
			var txtFile = "c:/test.txt";
			var file = new File([""],txtFile);
			var str = "My string of text";

			file.open("w"); // open file with write access
			file.writeln("First line of text");
			file.writeln("Second line of text " + str);
			file.write(str);
			file.close();
		}
		
		
		//Function to read from file
		function readfile(){
			var txtFile = "c:/test.txt"
			var file = new File([""],txtFile);

			file.open("r"); // open file with read access
			var str = "";
			while (!file.eof) {
				// read each line of text
				str += file.readln() + "\n";
			}
			file.close();
			alert(str);
		}
		
		
		