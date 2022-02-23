import React from 'react';
import './App.css';
import Aloha from './components/Greeting';
import { Fragment } from 'react';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
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

render () {
  const {users} = this.state;
  const liArray = users.map((user)=> {
    return   <li> 
       <Aloha name = {`${user.firstName} ${user.lastName}`} isGreeting/>
    </li>
  })
  console.log(liArray);
  return (

  <>
   <ul>
    {liArray}
   </ul>
  </>
  )
}
}
export default App;