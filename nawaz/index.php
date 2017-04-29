<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div align="right">
	<button onclick="window.location='login.php';" value="click here"> Login</button><br>
     Not registered Please
     <a  href="signup.php"> click here </a>
     <br>
     <br>
</div>
<div>
	<center><h1>DONATION ORGANIZER</h1></center>
</div><br><br>
<!--add picture-->
<script type='text/javascript'>
	let body = document.body;
	
	let table = document.createElement('table');
	table.setAttribute('border','1');
	table.setAttribute('width','360');
	
	let tr = document.createElement('tr');
	
	let td = document.createElement('td');
	
	let img = document.createElement('img');
	img.setAttribute('src','img/1.jpg');
	img.setAttribute('alt','Norway');
	img.setAttribute('width','350');
	img.setAttribute('height','200');
	//img.setAttribute('','');
	td.appendChild(img);
	
	let p = document.createElement('p');
	let b = document.createElement('b');
	let mainText = document.createTextNode('Lorem Ipsum');
	b.appendChild(mainText);
	p.appendChild(b);
	td.appendChild(p);
	
	let p = document.createElement('p');
	p.appendChild(document.createTextNode('Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'));
	td.appendChild(p);
	
	tr.appendChild(td);
	
	
	let td = document.createElement('td');
	
	let img = document.createElement('img');
	img.setAttribute('src','img/2.jpg');
	img.setAttribute('alt','Norway');
	img.setAttribute('width','350');
	img.setAttribute('height','200');
	img.setAttribute('class','w3-hover-opacity');
	td.appendChild(img);
	
	let p = document.createElement('p');
	let b = document.createElement('b');
	let mainText = document.createTextNode('Lorem Ipsum');
	b.appendChild(mainText);
	p.appendChild(b);
	td.appendChild(p);
	
	let p = document.createElement('p');
	p.appendChild(document.createTextNode('Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'));
	td.appendChild(p);
	
	tr.appendChild(td);
	
	
	let td = document.createElement('td');
	
	let img = document.createElement('img');
	img.setAttribute('src','img/3.jpg');
	img.setAttribute('alt','Norway');
	img.setAttribute('width','350');
	img.setAttribute('height','200');
	img.setAttribute('class','w3-hover-opacity');
	td.appendChild(img);
	
	let p = document.createElement('p');
	let b = document.createElement('b');
	let mainText = document.createTextNode('Lorem Ipsum');
	b.appendChild(mainText);
	p.appendChild(b);
	td.appendChild(p);
	
	let p = document.createElement('p');
	p.appendChild(document.createTextNode('Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'));
	td.appendChild(p);
	
	tr.appendChild(td);
	
	table.appendChild(tr);
	
	body.appendChild(table);
	
</script>

</body>
</html>