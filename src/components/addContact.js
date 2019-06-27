import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
class AddContact extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }

    addContact=()=>
    {
      axios.post('/add-contact',{...this.state})
       .then(()=>this.props.addContactReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }
    render() { 
        return ( 
            <div className='add-contact-container'>
             <h1>Add Contact</h1>
             Name :
             <input  type='text' name='name' onChange={this.handleChange}/>
             Phone :
             <input  type='text' name='phone' onChange={this.handleChange}/>
             Email :
             <input  type='text' name='email' onChange={this.handleChange}/>
             <Link to='/contacts'>
             <button onClick={this.addContact}>Add Contact </button>
             </Link>

            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addContactReducer:newcontact=>
        {
            dispatch({
                type:'ADD_CONTACT',
                newcontact
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddContact);