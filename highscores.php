<?php #highscores.php
	#Connection settings built using information from W3 school and YouTube tutorial below;
	#YouTube tutorial: https://www.youtube.com/watch?v=ueWpNe0PG34&t=49s
	$servername = "localhost";
	$username = "root"; #Not recommmended in production, just used for testing!!
	$password = "";
	$dbname = "playerdata";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error); #Kill the app if the connection fails.
	}

	$sql = "SELECT * FROM highscores
			ORDER BY Wins ASC, Draws ASC, Losses DESC
			LIMIT 10";
	$result = $conn->query($sql);
	#Building the page.
	echo <<<_START
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link rel="stylesheet" href="Styles/default.css">
				<link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" integrity="sha384-rtJEYb85SiYWgfpCr0jn174XgJTn4rptSOQsMroFBPQSGLdOC5IbubP6lJ35qoM9" crossorigin="anonymous">
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Olierra's Corner - Connect Four</title>
			</head>
			<body>
				<div class="wrapper">
				<header>
					<nav>
						<ul>
							<li><a class="home" href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="highscores.php">High Scores</a></li>
						</ul>
					</nav>
				</header>
				<article>
				</article>
				<main>
					<h1>High Scores</h1>
						<div class="highscores">
							<table>
								<tr>
									<th>Player</th>
									<th>Wins</th>
									<th>Draws</th>
									<th>Losses</th>
								</tr>
	_START;
	#Quick break to run our data submittion function in the correct location on the page.
		if ($result->num_rows > 0) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
				$playerWins = $row['Wins'] / 3;
				$playerDraws = $row['Draws'] / 3;
				$playerLosses = $row['Losses'] / 3;
				echo <<<_DATA
								<tr>
									<td>{$row['Player']}</td>
									<td>{$playerWins}</td>
									<td>{$playerDraws}</td>
									<td>{$playerLosses}</td>
								</tr>
				_DATA;
				}
		} else {
			echo "No one has played yet!";
		}
	$conn->close();
	#Back to building the page.
	echo <<<_END
							</table>
						</div> <!--End of highscore-->
					</main>
				</div> <!--End of Wrapper-->
			</body>
		</html>
	_END;
?>