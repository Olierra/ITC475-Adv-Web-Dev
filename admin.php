<?php # admin.php

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

	$sql = "SELECT * FROM clients";
	$result = $conn->query($sql);

	#Building the page.
	echo <<<_START
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Mega Travel - Admin Portal</title>
				<link href="Styles/default.css" rel="stylesheet" />
				<script crossorigin src="https://unpkg.com/react/umd/react.development.js"></script>
				<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
				<script src="Components/Welcome.js"></script>
			</head>
			<body>
				<div class="wrapper">
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
						<p>Below is the information for potential travel clients.</p>
					</article>
					<main>
						<div class="cards">
	_START;
	#Quick break to run our data submittion function in the correct location on the page.
	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	        echo
			        		"<div class='card'>
								<h2>{$row['FirstName']} {$row['LastName']}</h2>
			        			<p>ID: {$row['ID']}</p>
			        			<p>Phone: {$row['Phone']}</p>
			        			<p>Email: {$row['Email']}</p>
			        			<p>Adults: {$row['Adults']}</p>
			        			<p>Children: {$row['Children']}</p>
			        			<p>Destination: {$row['Destination']}</p>
			        			<p>Travel Date: {$row['Date']}</p>
			        			<ul> <h3>Activities:</h3>
			        				<li><p>{$row['Activity1']}</p></li>
			        				<li><p>{$row['Activity2']}</p></li>
			        				<li><p>{$row['Activity3']}</p></li>
			        				<li><p>{$row['Activity4']}</p></li>
			        				<li><p>{$row['Activity5']}</p></li>
			        			</ul>
			        		</div>";
			}
	} else {
	    echo "0 results";
	}
	$conn->close();
	#Back to building the page.
	echo <<<_END
						</div>
					</main>
				</div>
				<footer>
					Copyright Protected. All rights reserved. <br /><br />MEGA TRAVELS<br />mega@travels.com
				</footer>
			</body>
		</html>
	_END;
?>