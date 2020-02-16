import React from "react"
import sun from "../Icons/sun.png"
import moon from "../Icons/new-moon.png"

function WelcomeTime() {
	const date = new Date()
	const hours = date.getHours()
	const minutes = ("0"+date.getMinutes()).slice(-2) //Nice solution for displaying double digits from https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
	const currentTime = hours % 12 + ":" + minutes //Mod 12 will format the time to a 12-hour clock
	
	let aside
	let timeLogo
	let logoAltText

	if (hours < 12) {
		aside = "AM"
	} else {
		aside = "PM"
	}

	if ((hours >= 6 && hours < 18) || (hours === 18 && minutes < 1)) {
		timeLogo = sun
		logoAltText = "smiling sun logo"
	} else {
		timeLogo = moon
		logoAltText = "sleeping moon logo"
	}

	return (
		<p>
			<img src={timeLogo} alt={logoAltText} /> {currentTime} {aside}
		</p>
		)
}

export default WelcomeTime