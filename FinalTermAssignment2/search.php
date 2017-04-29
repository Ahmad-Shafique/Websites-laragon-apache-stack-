<?php
	session_start();
	include_once("config.php");

	$searchString = $_POST['searchString'];
	//$searchString = 'baby';
	
	/*
	class mainObj{
    	public $name,$address,$phone=array();
		
		
    }

	$obj = new mainObj();
    $obj->name = 'SomeName';
    $obj->address = 'SomeAddress';
    array_push($obj->phone,'013544785467','016488244684');
	$json=json_encode($obj);
    echo $json;
	*/
	
	class hotel{
		public $id,$hotelName,$stars,$address,$facilities=array();
	}
	
	$hotelsList=array();
	
	
	if(is_numeric($searchString)){
		$sql = "select * from hotels where id=".$searchString." or stars=".$searchString." or hotelName like '%".$searchString."%' or address like '%".$searchString."%' or facilities like '%".$searchString."%'";
		//echo $sql;
		
		$nameResult= $mysqli->query($sql);
		while($res = $nameResult->fetch_object()){
			$object = new hotel;
			
			$object->id = $res->id;
			$object->hotelName = $res->hotelName;
			$object->stars = $res->stars;	
			$object->address = $res->address;	
			$facilities = explode(",",$res->facilities);
				foreach($facilities as $f){
					array_push($object->facilities,$f);
				}
				
				
			array_push($hotelsList,$object);
		}
	}else{
		$sql = "select * from hotels where hotelName like '%".$searchString."%' or address like '%".$searchString."%' or facilities like '%".$searchString."%'";
		//echo $sql;
		
		$nameResult= $mysqli->query($sql);
		while($res = $nameResult->fetch_object()){
			$object = new hotel;
			
			$object->id = $res->id;
			$object->hotelName = $res->hotelName;
			$object->stars = $res->stars;	
			$object->address = $res->address;	
			$facilities = explode(",",$res->facilities);
				foreach($facilities as $f){
					array_push($object->facilities,$f);
				}
				
				
			array_push($hotelsList,$object);
		}
	}
	

	
	$answer = json_encode($hotelsList);
	echo $answer;
	
?>