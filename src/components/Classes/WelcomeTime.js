import React from 'react'
import sun from './Icons/sun.png'
import moon from './Icons/new-moon.png'

//Still need to get this to update in realtime....
function WelcomeTime() {
	let date = new Date()
	let hours = date.getHours()
	let minutes = ("0"+date.getMinutes()).slice(-2) //Nice solution for displaying double digits from https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
	let currentTime = hours + ":" + minutes

	let aside
	let timeLogo
	let logoAltText

	const welcomeStyle = {
		float: 'right',
		fontSize: 24,
		height: 24
	}

	if (hours < 12) {
		aside = "AM"
	} else if (hours === 12) {
		aside = "PM"
	} else {
		currentTime = hours % 12 + ":" + minutes //Mod 12 will format the time to a 12-hour clock
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
		<p style={welcomeStyle}>
			<img src={timeLogo} alt={logoAltText} style={welcomeStyle} /> {currentTime} {aside}
		</p>
		)
}

export default WelcomeTime