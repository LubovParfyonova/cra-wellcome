import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Aloha from '../Greeting';

class AlohaList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: this.props.users
        }
    }
   mapAloha = ({firstName, lastName, id})=>  <Aloha name = {`${firstName} ${lastName}`} isGreeting key = {id} id = {id} callbackDelete={this.setList}/>;
    
   setList = (id) => {
    const {users} = this.state;
    const filtered = users.filter((user)=> user.id !== id);
    this.setState({
        users: filtered
    })
}
   render () {
         const {users} = this.state;

    return <section>
        {users.map(this.mapAloha)}
        </section>
   }
      
    
}
export default AlohaList;