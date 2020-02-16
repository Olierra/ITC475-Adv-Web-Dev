import React from "react"

function Welcome() {
	const date = new Date()
	const hours = date.getHours()
	const minutes = date.getMinutes()

	let greeting

	if (hours < 12) { //Before 12PM
		greeting = "Morning"
	} else if ((hours >= 12 && hours < 17) || (hours === 17 && minutes < 1)) { //Between 12PM and 5:01PM
		greeting = "Afternoon"
	} else { // After 5PM
		greeting = "Evening"
	}

	return (
		<h1>Good {greeting}</h1>
		)
}

export default Welcome