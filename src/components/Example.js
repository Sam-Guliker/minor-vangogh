import React, { Component } from "react";

class Notification extends Component {
    state = {
        notification: false
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 32) {
            console.log("key pressed")
            this.setState({
                notification: true
            });
        }
    };

    render() {
        return (
            <div className={this.state.notification ? "notification open" : "notification"}>
               <p>Het is druk bij de aardappel pellers. Bij de zonnebloem is het op dit moment minder druk.</p>
                <button>Ga naar de Zonnebloem</button>
            </div>
        );
    }
}

export default Notification;
