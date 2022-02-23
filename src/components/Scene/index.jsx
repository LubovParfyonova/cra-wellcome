import React, { Component } from 'react';
import './Scene.css'
import Toggler from './Toggler';
import Indicator from './Indicator';


class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }
    setTheme = () => {
        const {theme} = this.state;
        this.setState ({
            theme: theme === 'light' ? 'dark' : 'light'
        })
    }
    render() {
        const {theme} = this.state;
        const cN = `scene ` + theme;
        return (
            <div className={cN}>
                <Indicator theme = {theme}/>
                <Toggler callbackParent={this.setTheme}/>
            </div>
        );
    }
}

export default Scene;
