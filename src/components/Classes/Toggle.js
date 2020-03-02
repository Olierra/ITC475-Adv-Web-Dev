import React, { Component } from "react"
import Activities from "./Activities"

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
		}

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	//Really want this to be one div for the output of the generated button below, but I'm not sure how yet...
	toggleDiv = () => {
		const {show} = this.state
		this.setState({show: !show})
	}

	render() {
		return (
			<div id="Agenda">
				<button onClick={this.toggleDiv}>{this.props.Trip}</button>
				{this.state.show && <Activities selectedTrip={this.props.Trip} />}
			</div>
		)
	}
}

export default App