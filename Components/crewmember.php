<?php # crewmember.php
	#Welcome backstage! This page is responsible for collecting the player data and constructing
	#the SQL queries needed to build that high score board!
	#Connection settings built using information from W3 school and YouTube tutorial below;
	#YouTube tutorial: https://www.youtube.com/watch?v=ueWpNe0PG34&t=49s
	$servername = "localhost";
	$username = "root"; #Not recommmended in production, just used for testing!!
	$password = ""; #Also not recoommended, but we're testing here! :P
	$dbname = "playerdata"; #Our database. Only has one table currently...
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error); #Kill the app if the connection fails.
	}
	#More code from Optikalefx's Javascript object to PHP object conversion. Big props to him for this!
	#Link: https://www.youtube.com/watch?v=pORFYsgOXog&list=WL&index=14&t=0s
	$results = jsonStringtoObject($_POST['json']);
	function jsonStringtoObject($str) {
		return json_decode(stripslashes($str));
	}
	#Collecting results from match...
	$matchWinner = $results->matchWinner;
	$matchWinnerWin = $results->matchWinnerWin;
	$matchWinnerDraw = $results->matchWinnerDraw;
	$matchWinnerLoss = $results->matchWinnerLoss;
	$matchOpponent = $results->matchOpponent;
	$matchOpponentWin = $results->matchOpponentWin;
	$matchOpponentDraw = $results->matchOpponentDraw;
	$matchOpponentLoss = $results->matchOpponentLoss;
	#Update Highscore Entry
	$winnerSql = "INSERT INTO highscores (Player, Wins, Draws, Losses)
			VALUES ('$matchWinner', '$matchWinnerWin', '$matchWinnerDraw', '$matchWinnerLoss')
			ON DUPLICATE KEY UPDATE Player = '$matchWinner', Wins = Wins + '$matchWinnerWin', Draws = Draws + '$matchWinnerDraw', Losses = Losses + '$matchWinnerLoss';";

	$opponentSql = "INSERT INTO highscores (Player, Wins, Draws, Losses)
			VALUES ('$matchOpponent', '$matchOpponentWin', '$matchOpponentDraw', '$matchOpponentLoss')
			ON DUPLICATE KEY UPDATE Wins = Wins + '$matchOpponentWin', Draws = Draws + '$matchOpponentDraw', Losses = Losses + '$matchOpponentLoss';";
	#This will submit the data to the mySQL table. Also bulit using information from W3 Schools, and modified to fit this site.
	function submitData($conn,$sql){
		if ($conn->query($sql) === TRUE) {
			echo "<p>Update recorded!</p>";
		} else {
			echo $conn->error;
		}
	}
	submitData($conn,$winnerSql);
	submitData($conn,$opponentSql);
	$conn->close();
?>