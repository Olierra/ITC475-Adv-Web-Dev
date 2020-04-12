<?php # formsubmit.php
	if (isset($_POST['firstName'])) $firstName = $_POST['firstName'];
	else $firstName = "(Not entered)";

	if (isset($_POST['lastName'])) $lastName = $_POST['lastName'];
	else $lastName = "(Not entered)";

	if (isset($_POST['emailAddress'])) $emailAddress = $_POST['emailAddress'];
	else $emailAddress = "(Not entered)";

	if (isset($_POST['phoneNumber'])) $phoneNumber = $_POST['phoneNumber'];
	else $phoneNumber = "(Not entered)";

	if (isset($_POST['numberOfAdults'])) $numberOfAdults = $_POST['numberOfAdults'];
	else $numberOfAdults = "(Not entered)";

	if (isset($_POST['numberOfChildren'])) $numberOfChildren = $_POST['numberOfChildren'];
	else $numberOfChildren = "(Not entered)";

	if (isset($_POST['tripDate'])) $tripDate = $_POST['tripDate'];
	else $tripDate = "(Not entered)";

	if (isset($_POST['destination'])) $destination = $_POST['destination'];
	else $destination = "(Not entered)";

	#Activities chosen
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

	function walkWithMe($value,$key){
		echo "<p>$value</p>";
	}

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
	_START;
	array_walk($activities, "walkWithMe");
	echo <<<_END
					<br>
					<p>An agent will be in touch with you soon!</p>
				</main>
				<footer>
					Copyright Protected. All rights reserved. <br /><br />MEGA TRAVELS<br />mega@travels.com
				</footer>
			</body>
		</html>
	_END;
?>