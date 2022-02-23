import React, { Component } from 'react';

function Toggler (props) {

        return (
            <button onClick= {props.callbackParent}>Click me to toggle</button>
        );
    
}

export default Toggler;
