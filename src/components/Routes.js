import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Home'
import ContactList from './contactlist'
import AddContact from './addContact'
import EditContact from './editContact'
class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/contacts' component={ContactList}/>
             <Route exact path='/addcontact' component={AddContact}/>
             <Route exact path='/editcontact/:_id' 
             render={props=><EditContact _id={props.match.params._id}/>}/>

            </div>
         );
    }
}
 
export default Routes;