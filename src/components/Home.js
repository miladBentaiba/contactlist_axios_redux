import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    render() { 
        return ( 
            <div className='home-container'>
            <h1> My Contact List </h1>
            <Link to='/contacts'>
            <button> list Contacts</button>
            </Link>
            <Link to='/addcontact'>
            <button> Add Contact</button>
            </Link>

            </div>
         );
    }
}
 
export default Home;