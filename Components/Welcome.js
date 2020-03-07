function Greeting() {
    var date = new Date();
    var hours = date.getHours();
    var time = date.toLocaleTimeString();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }
    return (
        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("h3", {id: "WelcomeTime"}), time));
}


//* Return sun or moon icon *//

function Icon() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();

    if ((hours >= 6 && hours < 18) || (hours = 18 && min == 0)) {
        return (
            React.createElement("img", {
                src: "./Icons/sun.png",
                width: "24px",
                alt: "day",
            }));
    } else {
        return (
            React.createElement("img", {
                src: "./new-moon.png",
                width: "24px",
                alt: "night"
            }));
    }

}
//* Display greeting, time, and icon. Update clock *//

function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(Greeting, null), React.createElement
        (Icon, null)), document.getElementById("WelcomeBar"));
}
setInterval(Tick, 1000); 