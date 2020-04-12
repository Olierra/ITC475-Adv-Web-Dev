class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            numberOfChildren: null,
            numberOfAdults: null,
            tripDate: new Date(),
            destination: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

}

class Activities extends React.Component {
    constructor() {
        super();
        this.state = {
            destination: "",
            cityTours: false,
            sports: false,
            cycling: false,
            museums: false,
            boating: false,
            sailing: false,
            beach: false,
            hiking: false,
            theatre: false,
            parksRec: false,
            snorkeling: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }

    activityList() {
        switch (this.state.destination) {

            case 'Maldives':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "sailing",
                            onChange: this.handleChange,
                            checked: this.state.sailing
                        }), " Sailing",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "beach",
                            onChange: this.handleChange,
                            checked: this.state.beach
                        }), " Beach",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "hiking",
                            onChange: this.handleChange,
                            checked: this.state.hiking
                        }), " Hiking",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating"));

                break;

            case 'New Zealand':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "cityTours",
                            onChange: this.handleChange,
                            checked: this.state.cityTours
                        }), " City Tours",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "sports",
                            onChange: this.handleChange,
                            checked: this.state.sports
                        }), " Sports",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "cycling",
                            onChange: this.handleChange,
                            checked: this.state.cycling
                        }), " Cycling",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating"));


                break;

            case 'Venice':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "museums",
                            onChange: this.handleChange,
                            checked: this.state.museums
                        }), " Museums",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "theatre",
                            onChange: this.handleChange,
                            checked: this.state.theatre
                        }), " Theatre",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "parksRec",
                            onChange: this.handleChange,
                            checked: this.state.parksRec
                        }), " Parks and Recreation",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "cityTours",
                            onChange: this.handleChange,
                            checked: this.state.cityTours
                        }), " City Tours"));


                break;

            case 'Cancun':
                return (
                    React.createElement("label", null,
                        React.createElement("input", {
                            type: "checkbox",
                            name: "parksRec",
                            onChange: this.handleChange,
                            checked: this.state.parksRec
                        }), " Parks and Recreation",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "beach",
                            onChange: this.handleChange,
                            checked: this.state.beach
                        }), " Beaches",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "boating",
                            onChange: this.handleChange,
                            checked: this.state.boating
                        }), " Boating",


                        React.createElement("br", null),

                        React.createElement("input", {
                            type: "checkbox",
                            name: "snorkeling",
                            onChange: this.handleChange,
                            checked: this.state.snorkeling
                        }), " Snorkeling"));

                break;

            default:
                //return React.createElement("p", null, "Choose a destination.");
        }
    }

    render() {
        return (
            React.createElement("main", null,
                React.createElement("select", {
                    value: this.state.destination,
                    name: "destination",
                    onChange: this.handleChange,
                    required: true
                },

                    React.createElement("option", { value: "" }, "-- Please choose a destination --"),
                    React.createElement("option", { value: "Maldives" }, "Maldives, South Asia"),
                    React.createElement("option", { value: "New Zealand" }, "New Zealand"),
                    React.createElement("option", { value: "Venice" }, "Venice, Italy"),
                    React.createElement("option", { value: "Cancun" }, "Cancun, Mexico")),


                React.createElement("br", null),

                this.activityList(),

                React.createElement("br", null)
            )
        );
    }
}

ReactDOM.render(
    React.createElement("form", {id: 'ContactForm', method: 'post', action: 'formsubmit.php' },
        React.createElement('h3', null, "First Name"),
        React.createElement("input", {type: 'text', name: 'firstName', placeholder: 'First Name', required: true}), //First Name
        
        React.createElement('h3', null, "Last Name"),
        React.createElement("input", {type: 'text', name: 'lastName', placeholder: 'Last Name', required: true}), //Last Name
        
        React.createElement('h3', null, "Email Address"),
        React.createElement("input", {type: 'email', name: 'emailAddress', className: 'emailAddress', placeholder: 'Email Address', required: true}), //Email Address
        
        React.createElement('h3', null, "Phone Number"),
        React.createElement("input", {type: 'tel', name: 'phoneNumber', className: 'phoneNumber', placeholder: "555 555 5555", pattern: "[0-9]{3} [0-9]{3} [0-9]{4}", required: true}), //Phone Number
        
        React.createElement('h3', null, "Number of Adults"),
        React.createElement("input", {type: 'number', name: 'numberOfAdults', min: 0, required: true}), //Number of Children
        
        React.createElement('h3', null, "Number of Children"),
        React.createElement("input", {type: 'number', name: 'numberOfChildren', min: 0, required: true}), //Number of Adults
        
        React.createElement('h3', null, "Trip Date"),
        React.createElement("input", {type: 'date', name: 'tripDate', required: true}), //Trip Date
        
        React.createElement('h3', null, "Destination"),
        React.createElement(Activities, null),

        React.createElement('input', {className: 'button', type: 'submit', value: 'submit'}),
        React.createElement('input', {className: 'button', type: 'reset', value: 'Clear'})
        ),
    document.getElementById('root')
);