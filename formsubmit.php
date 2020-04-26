<?php # formsubmit.php

	#Connection settings built using information from W3 school and YouTube tutorial below;
	#YouTube tutorial: https://www.youtube.com/watch?v=ueWpNe0PG34&t=49s
	$servername = "localhost";
	$username = "root"; #Not recommmended in production, just used for testing!!
	$password = "";
	$dbname = "clientrecords";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error); #Kill the app if the connection fails.
	}

	#Check to see if the client entered their information,
	#and store it into our variables if they did.
	#If the form works correctly, these should always have data.

	#First Name
	if (isset($_POST['firstName'])) $firstName = $_POST['firstName'];
	else $firstName = "(Not entered)";

	#Last Name
	if (isset($_POST['lastName'])) $lastName = $_POST['lastName'];
	else $lastName = "(Not entered)";

	#Email Address
	if (isset($_POST['emailAddress'])) $emailAddress = $_POST['emailAddress'];
	else $emailAddress = "(Not entered)";

	#Phone Number
	if (isset($_POST['phoneNumber'])) $phoneNumber = $_POST['phoneNumber'];
	else $phoneNumber = "(Not entered)";

	#Number of Adults
	if (isset($_POST['numberOfAdults'])) $numberOfAdults = $_POST['numberOfAdults'];
	else $numberOfAdults = "(Not entered)";

	#Number of Children
	if (isset($_POST['numberOfChildren'])) $numberOfChildren = $_POST['numberOfChildren'];
	else $numberOfChildren = "(Not entered)";

	#Trip Date
	if (isset($_POST['tripDate'])) $tripDate = $_POST['tripDate'];
	else $tripDate = "(Not entered)";

	#Destination
	if (isset($_POST['destination'])) $destination = $_POST['destination'];
	else $destination = "(Not entered)";

	#Activities Chosen
	#This will create an array based on which activities were chosen. If a checkbox was
	#selected it will be added to the array.
	$activities = array();
	if (isset($_POST['cityTours']) and $_POST['cityTours'] == 'on') array_push($activities, "City Tours");
	if (isset($_POST['sports']) and $_POST['sports'] == 'on') array_push($activities, "Sports");
	if (isset($_POST['cycling']) and $_POST['cycling'] == 'on') array_push($activities, "Cycling");
	if (isset($_POST['museums']) and $_POST['museums'] == 'on') array_push($activities, "Museums");
	if (isset($_POST['boating']) and $_POST['boating'] == 'on') array_push($activities, "Boating");
	if (isset($_POST['sailing']) and $_POST['sailing'] == 'on') array_push($activities, "Sailing");
	if (isset($_POST['beach']) and $_POST['beach'] == 'on') array_push($activities, "Beach");
	if (isset($_POST['hiking']) and $_POST['hiking'] == 'on') array_push($activities, "Hiking");
	if (isset($_POST['theatre']) and $_POST['theatre'] == 'on') array_push($activities, "Theatre");
	if (isset($_POST['parksRec']) and $_POST['parksRec'] == 'on') array_push($activities, "Parks and Recreation");
	if (isset($_POST['snorkeling']) and $_POST['snorkeling'] == 'on') array_push($activities, "Snorkeling");

	$activity1 = array_pop($activities);
	$activity2 = array_pop($activities);
	$activity3 = array_pop($activities);
	$activity4 = array_pop($activities);
	$activity5 = array_pop($activities);

	$sql = "INSERT INTO clients (FirstName, LastName, Phone, Email, Adults, Children, Destination, Date, Activity1, Activity2, Activity3, Activity4, Activity5)
	VALUES ('$firstName', '$lastName', '$phoneNumber', '$emailAddress', '$numberOfAdults', '$numberOfChildren', '$destination', '$tripDate', '$activity1', '$activity2', '$activity3', '$activity4', '$activity5')";

	#This will submit the data to the mySQL table. Also bulit using information from W3 Schools, and modified to fit this site.
	function submitData($conn,$sql){
		if ($conn->query($sql) === TRUE) {
			echo "<p>An agent will be in touch with you soon!</p>";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	#Building the page.
	echo <<<_START
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Mega Travel - Form Submitted</title>
				<link href="Styles/default.css" rel="stylesheet" />
				<link href="Styles/ContactForm.css" rel="stylesheet" />
				<script crossorigin src="https://unpkg.com/react/umd/react.development.js"></script>
				<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
				<script src="Components/Welcome.js"></script>
			</head>
			<body>
				<header>
					<img id="logo" src="Logos/megaTravelLogo.png" alt="Logo" />
					<nav>
						<div id="WelcomeBar"></div>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About Us</a></li>
							<li><a href="contact.html">Contact Agent</a></li>
						</ul>
					</nav>
				</header>
				<article>
					<div>
						<h2>Form Submitted</h2>
						<p>Thank you for submitting your travel agent contact request! Here is the information you submitted:</p>
						<br/>
					</div>
				</article>
				<main>
					<h2>First Name</h2>
					<p>$firstName</p>
					<h2>Last Name</h2>
					<p>$lastName</p>
					<h2>Email Address</h2>
					<p>$emailAddress</p>
					<h2>Phone Number</h2>
					<p>$phoneNumber</p>
					<h2>Number of Adults</h2>
					<p>$numberOfAdults</p>
					<h2>Number of Children</h2>
					<p>$numberOfChildren</p>
					<h2>Trip Date</h2>
					<p>$tripDate</p>
					<h2>Destination</h2>
					<p>$destination</p>
					<h2>Actitivies Chosen</h2>
					<p>$activity1</p>
					<p>$activity2</p>
					<p>$activity3</p>
					<p>$activity4</p>
					<p>$activity5</p>
					<br>
	_START;
	#Quick break to run our data submittion function in the correct location on the page.
	submitData($conn,$sql);
	#Back to building the page.
	echo <<<_END
				</main>
				<footer>
					Copyright Protected. All rights reserved. <br /><br />MEGA TRAVELS<br />mega@travels.com
				</footer>
			</body>
		</html>
	_END;
?>