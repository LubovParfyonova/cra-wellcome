import React from 'react';

import Aloha from '../Greeting';

class AlohaDashboard extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
          isDirectSort: true,
          users: [{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
          },
          {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
          },
          {
            id: 3,
            firstName: 'Myke',
            lastName: 'Doe',
          },
          {
            id: 4,
            firstName: 'Nyke',
            lastName: 'Doe',
          },
          {
            id: 5,
            firstName: 'Gyke',
            lastName: 'Doe',
          },
        ]
        }
    }
    sortUser = () => {
        const {users, isDirectSort} = this.state;
        const copyArray = [...users];
    //const copy = JSON.parse(JCON.stringify(users));
        this.setState({
          users:copyArray.sort((prev,next) => 
            isDirectSort ? prev.id - next.id : next.id - prev.id),
          isDirectSort: !isDirectSort
        })
      }
    mapAloha = ({firstName, lastName, id})=>  <Aloha name = {`${firstName} ${lastName}`} isGreeting key = {id} id = {id}/>;

    
    render () {
      const {users} = this.state;
     
      return (
      <>
      <button onClick={this.sortUser}>Sort user</button>
       <ul>
       {users.map(this.mapAloha)}
       </ul>
      </>
      )
    }
}
export default AlohaDashboard;