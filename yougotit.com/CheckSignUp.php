<?php
session_start();


// define variables and set to empty values
$nameErr = $emailErr = $passErr = $repassErr = "";
$fname = $lname = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["first_name"])) {
    $nameErr = "First Name is required";
  } else {
    $fname = test_input($_POST["first_name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$fname)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }
  
  if (empty($_POST["last_name"])) {
    $nameErr = "Last Name is required";
  } else {
    $lname = test_input($_POST["last_name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$lname)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }
  
  if (empty($_POST["password"])) {
    $passErr = "password is required";
  } 
  elseif (($_POST["password"] != $_POST["repassword"])){
	$passErr = "Passwords don't match !!!";
  }
  else {
	$password = test_input($_POST["password"]);
    if (strlen($_POST["password"]) <= '8') {
        $passErr = "Your Password Must Contain At Least 8 Characters!";
    }
    elseif(!preg_match("#[0-9]+#",$password)) {
        $passErr = "Your Password Must Contain At Least 1 Number!";
    }
    elseif(!preg_match("#[A-Z]+#",$password)) {
        $passErr = "Your Password Must Contain At Least 1 Capital Letter!";
    }
  }
  




   
	if ($nameErr=="") {
	$_SESSION["ne"] = "";

	} else {
	  $_SESSION["ne"] = $nameErr;
	}

	if ($emailErr=="") {
	$_SESSION["ee"] = "";
	} else {
	  $_SESSION["ee"] = $emailErr;
	}

	if ($passErr=="") {
	  $_SESSION["pe"] = "";
	} 
	else {
	  $_SESSION["pe"] = $passErr;
	}

	header("Location:SignUp.php");
 
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
