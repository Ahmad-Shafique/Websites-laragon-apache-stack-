<?php
	$hotels = simplexml_load_file("hotels.xml");
	
	
	foreach($hotels->hotel as $hotel){
		echo "<h2>" . $hotel->name . " - " . $hotel->stars . " Star Hotel</h4><br>";
		echo "<h4><u><b>Facilities :</b></u></h4><br><ol>";
		foreach($hotel->facilities->facilityName as $facility){
			echo "<li>" . $facility . "</li";
		}
		echo "</ol><br><br>";
		echo "<h4><u><b>Address :</b></u></h4><br>";
		echo $hotel->address ;
		echo "<br>Distance from center is " . $hotel->distance . "KM <br><br>";
		echo "<h3><b>Room Available: ";
		if($hotels->available == "True") echo "YES";
		else echo "NO";
		echo "</b></h3><br><br><hr>";
		
	}
?>

