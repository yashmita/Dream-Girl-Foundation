<?php
	$Name = $_POST['Name'];
	$Contact = $_POST['Contact'];
	$Email = $_POST['Email'];
	$CompanyName = $_POST['CompanyName'];
	$Message = $_POST['Message'];

	//create connection
	$conn = new mysqli('localhost', 'root', '', 'dgf');

	if($conn->connect_error){
		die('Connection failed : '.$conn->connect_error);
	}
	else{
		$stmt = $conn->prepare("insert into register(Name, Contact, Email, CompanyName, Message) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sisss", $Name, $Contact, $Email, $CompanyName, $Message);
		$stmt->execute();
		echo "Message sent successfully";
		$stmt->close();
		$conn->close();
	}
?>