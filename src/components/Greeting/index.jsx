import { Component } from "react";
import './Greeting.css';

class Greeting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    alohaHandler = () => {
            this.setState({
                isGreeting: !this.state.isGreeting
            });
    }

    render () {
        const {firstName, photo} = this.props.user;
        const {isGreeting} = this.state;
        return (
            <>
        <h1> {isGreeting ? "Hello" : "Goodbye"}, {firstName}</h1>
        <button onClick={this.alohaHandler}>Aloha!</button>
        <img src={photo} className="userphoto"/> 
        </>
        )
    }
}

export default Greeting; 
