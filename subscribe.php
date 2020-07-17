<?php

// get value of email on submit
  $email = $_POST['email'];

  $conn = new mysqli('https://www.db4free.net/','Ade@2005','adecancode','earlyaccess');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into subscribers(email) values(?)");
		$stmt->bind_param("s", $email);
		$execval = $stmt->execute();
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}

	if (empty($_POST["email"])) {
		$emailErr = "Email is required";
	  } else {
		$email = ($_POST["email"]);
		// check if e-mail address is well-formed
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		  $emailErr = "Invalid email format";
		}
	  }

?>