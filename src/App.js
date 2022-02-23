import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import { Fragment } from 'react';

function App() {

const user = {
  firstName: 'Vlad',
  photo: 'https://www.shareicon.net/data/512x512/2016/10/25/847809_user_512x512.png'
}
const user2 = {
  firstName: 'Masha',
  photo: 'https://www.shareicon.net/data/512x512/2016/10/25/847809_user_512x512.png'
}
const user3 = {
  firstName: 'Dasha',
  photo: 'https://www.shareicon.net/data/512x512/2016/10/25/847809_user_512x512.png'
}

  return (

  <>
    <Greeting user = {user} isGreeting/>
    <Greeting user = {user2}/>
    <Greeting user = {user3} isGreeting/>
  </>
  )
}

export default App;