import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
class ContactItem extends Component {

    deleteContact=()=>
    {  const {item} = this.props
    axios.delete(`/delete-contact/${item._id}`)   
  .then(()=>this.props.deleteContactReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
        const {item}=this.props
        return ( 
            <div className='contact-item-container'>
            <h2>Name : {item.name}</h2>
            <h3>phone : {item.phone}</h3>
            <h3>Email : {item.email}</h3>
            <Link to={`/editcontact/${item._id}`}>
            <button>Edit</button>
            </Link>
            <button onClick={this.deleteContact}>Delete</button>
            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteContactReducer:_id=>
        {
            dispatch({
                type:'REMOVE_CONTACT',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ContactItem);