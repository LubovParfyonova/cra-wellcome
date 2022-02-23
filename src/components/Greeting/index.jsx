import { Component } from "react";
import './Greeting.css';

class Aloha extends Component{
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

    deleteHandler = () => {
        const {callbackDelete, id} = this.props;
        callbackDelete(id);
    }

    render () {
        const {name} = this.props;
        const {isGreeting} = this.state;
        
        if (!isGreeting) {
            return <h1>Пока, {name}</h1>
        }
        return (
            <>
        <h1> {isGreeting ? "Hello" : "Goodbye"}, {name}</h1><button onClick={this.deleteHandler}>X</button>
        <button onClick={this.alohaHandler}>Aloha!</button> 
        </>
        )
    }
}

export default Aloha; 
