<!DOCTYPE html>

<html>
	<body>
		<div onready='testTable()'>
		</div>
	</body>
</html>

<script type='text/javascript'>
	function testTable(){
			let td,tdText,ul,li,tr,th1,th2,th3,th4,th5,thText;
			
			let body = document.body;
			
			let elem = document.getElementById('table');
			elem.parentNode.removeChild(elem);
			
			let table = document.createElement('table');
			table.setAttribute('border','2px');
			table.setAttribute('width','80%');
			table.setAttribute('id','table');
			
			console.log('Table created');
			
			tr = document.createElement('tr');
			th1 = document.createElement('th');
			th1.appendChild(document.createTextNode('S.No.'));
			tr.appendChild(th1);
			
			console.log('SNo. column created');
			
			tr=null;
			tr = document.createElement('tr');
			th2 = document.createElement('th');
			thText = document.createTextNode('Hotel Name');
			th2.appendChild(thText);
			tr.appendChild(th2);
			
			console.log('Hotel Name column created');
			
			tr=null;
			tr = document.createElement('tr');
			th3 = document.createElement('th');
			thText = document.createTextNode('Stars');
			th3.appendChild(thText);
			tr.appendChild(th3);
			
			console.log('Stars column created');
			
			tr=null;
			tr = document.createElement('tr');
			th4 = document.createElement('th');
			thText = document.createTextNode('Address');
			th4.appendChild(thText);
			tr.appendChild(th4);
			
			console.log('Address column created');
			
			tr=null;
			tr = document.createElement('tr');
			th5 = document.createElement('th');
			thText = document.createTextNode('Facilities');
			th5.appendChild(thText);
			tr.appendChild(th5);
			
			console.log('Facilities column created');
			
			table.appendChild(tr);
			
			body.appendChild(table);
	}
</script>