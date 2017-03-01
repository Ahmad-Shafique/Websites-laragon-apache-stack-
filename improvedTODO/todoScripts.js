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
			var mac = document.createTextNode(obj.mainactivity);
			var br = document.createElement("br");
			pmac.appendChild(mac);
			parent.appendChild(pmac);
			//parent.appendChild(br);
			
			var i=0 , length = obj.subactivity.length;
            console.log("vars declared");
            for(i=0; i<length; i++){
				var paac = document.createElement("p");
				paac.setAttribute("class","sub");
				paac.style.backgroundColor = "green";
				console.log(paac.getAttribute("class"));
				var aac = document.createTextNode(obj.subactivity[i]);
				//var br = document.createElement("br");
				paac.appendChild(aac);
				parent.appendChild(paac);
				console.log("child appended");
				//parent.appendChild(br);
            }
        }