<?php
	$to = "stjepan@serdeljac.com";
	$subject = "You've been contacted on your portfolio!";
	$name = "Name: " . $_POST['name'];
	$company = "Company: " . $_POST['comp'];
	$phone = "Phone: " . $_POST['phone'];
	$email = "Email: " . $_POST['email'];
	$msg = $_POST['msg'];
	
	$message = 	$name . "\n" . 
						$company . "\n" . 
						$phone . "\n" . 
						$email . "\n \n" . 
						$msg;

	mail($to,$subject,$message,$email);
	header("Location: thankyou.html");
?> 