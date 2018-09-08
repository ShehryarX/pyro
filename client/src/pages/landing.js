import React, { Component } from 'react';
import './landing.css';
import logo from './logo.png'

class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <img src={logo} alt="logo" className='logo'/>
                <div className='tagline'>
                    <h1>Enjoy music together.</h1>
                </div>

                <div className='tabBar'>
                    <div className='button' style={{backgroundColor:'#4D4D4D', fontWeight: '500'}}>
                        JOIN
                    </div>
                    <div className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        HOST
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;