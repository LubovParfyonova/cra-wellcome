import React from 'react';
import Aloha from '../Greeting';
import AlohaList from '../AlohaList';

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

      formSubmitHandler = (event) => {
        event.preventDefault();
        const {users} = this.state;
        const [firstName, lastName] = event.target.userName.value.split(' ');
          const userObj = {
              firstName,
              lastName,
              id: users.length + 1
          };

          this.setState({
              users: [...users, userObj]
          })
    }

    render () {
      const {users} = this.state;
     
      return (
      <>
        <form onSubmit={this.formSubmitHandler}>
            <input type="text" name="userName" />
            <button type="submit">Click to send</button>
        </form>
      <button onClick={this.sortUser}>Sort user</button>
        <AlohaList users = {users} />
      </>
      )
    }
}
export default AlohaDashboard;