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
		
		
		
		function testJsonification(){
			/*
			var a1 = document.getElementsByClassName('activity');
			var len = a1.length;
			var mstr = "Main acts : ";
			var sstr = "Sub acts : ";
			var i=1,j=0;
			mstr += document.getElementById(i).innerHTML;
			i++;
			if( document.getElementById(i) != null){
				mstr += document.getElementById(i).innerHTML;
			}
			
			//for(i=0 ; i<len ; i++){
			//	mstr += document.getElementById().childNodes[0].innerHTML;
			//}
			
			//console.log("main string : ");
			console.log(mstr);
			//console.log("sub strings : ");
			console.log(sstr);
			*/
			
			
			
			/*
			var a1 = document.getElementsByClassName('activity');
			var len = a1.length;
			var mstr = "Main acts : \n";
			var sstr = "Sub acts : \n";
			var i=0,j=0;
			for(i=0 ; i<len ; i++){
				var ch = a1(i).childNodes;
				var chlen = ch.length;
				for(j=0 ; j<chlen ; j++){
					if(j==0){
						mstr = mstr + ch(j).innerHTML;
					}
					else{
						sstr = sstr + ch(j).innerHTML;
					}
				}
			}
			
			//console.log("main string : ");
			console.log(mstr);
			//console.log("sub strings : ");
			console.log(sstr);
			*/
			
			
			
			
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
		}
		
		
		//#######################     TEST FUNCTIONS ABOVE THIS LINE ONLY		#################################
		
		
		
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
			
			console.log("Entered fn()");
			var divparent = document.getElementById("subactvities");
			console.log("parent fetched");
			var subac = document.createElement("input");
			
			console.log("element created");
			subac.setAttribute("type","text");
			subac.setAttribute("class","subactivity");
			subac.setAttribute("placeholder","Subactivity");
			subac.setAttribute("onchange","addDynamicSubactivityAdderFunction()");
			console.log("attributes added");
			divparent.appendChild(subac);
			
			divparent.appendChild(document.createElement("br"));
			console.log("child appended");
		}
		
		
		
		
		
		function newUsernameAjaxValidator() {
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
			console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			console.log("request header set");
			console.log(document.getElementById('newusername').value);
			xmlhttp.send("username=" + document.getElementById('newusername').value);
			console.log("request sent");
			
		}
		
		
		
		function oldUsernameAjaxValidator() {
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
			console.log("POST method set");
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			console.log("request header set");
			console.log(document.getElementById('oldusername').value);
			xmlhttp.send("username=" + document.getElementById('oldusername').value);
			console.log("request sent");
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		