import React from 'react';
import Aloha from '../Greeting';

function AlohaList (props) {

   const mapAloha = ({firstName, lastName, id})=>  <Aloha name = {`${firstName} ${lastName}`} isGreeting key = {id} id = {id}/>;
    
        const {users} = props;
    return <section>
        {users.map(mapAloha)}
        </section>
    
}
export default AlohaList;