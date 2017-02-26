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
			//var strr = parent.innerHTML;
			var strr = document.getElementsByClassName("mainactivity")[0].value;
			alert(strr);
			var children = parent.childNodes;
			var i,l=children.length,str="";
			for(i=0 ; i<l-1 ; i++){
				str +=children[i].innerHTML + " ";
				
			} 
			
			//alert(str);
			/* var otpt = document.getElementsByClassName("mainactivity").value;
			var o = otpt[0].value;
			alert(o); */
			
		}
		
		function addFunction(){
			var strr = document.getElementsByClassName("mainactivity")[0].value;
			alert(strr);
			var o = {mainactivity:strr,subactivity:[]};
			return o;
		}
		