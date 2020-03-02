import React from "react"

function Activities(props) {

	let activities = []

	if (props.selectedTrip === "Maldives") {
		activities = ["Museums","Sailing","Beach","Hiking","Boating"]
	} else if (props.selectedTrip === "NewZealand") {
		activities = ["City Tours", "Sports", "Cycling", "Museums", "Boating"]
	} else if (props.selectedTrip === "Venice") {
		activities = ["Museums", "Theatre", "Parks and Recreation", "City Tours"]
	} else if (props.selectedTrip === "Cancun") {
		activities = ["Parks and Recreation", "Beaches", "Boating", "Snorkeling"]
	} else {
		activities = ["Unsure", "how", "you", "got", "here..."]
	}

	let activitySelector = []

	for (let i = 0; i < activities.length; i++) {
        activitySelector[i] = (
            <div key={activities[i]} className="todo-item">
                <input type="checkbox" id={activities[i]} name={activities[i]} value={activities[i]}/>
                <label htmlFor={activities[i]}>{activities[i]} </label>
            </div>
        )
	}

	return (
        <div className="todo-list">
            {activitySelector}
        </div>
        )
}

export default Activities