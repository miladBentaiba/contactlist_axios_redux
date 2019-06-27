import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import ContactItem from './contactItem'

class ContactList extends Component {
  componentDidMount=()=>{
            axios.get('/get-contact').then((res)=>this.props.updateContactReducer(res.data))
        }
        
    render() { 
        const {contacts}= this.props
        
        // console.log(this.props.contacts)
        return ( 
            <section>
            <div className='contact-list-container'>
            
           {
               contacts.map((el,index)=>
            <ContactItem key={index} item={el}/>
        )
           }
            </div>
            <Link to='/'>
            <button>Home</button>
            </Link>
            </section>
         );
    }
}
const mapStateToProps=(state)=>
{
    return {
        contacts:state.contactReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateContactReducer:contacts=>
        {
            dispatch({
                type:'UPDATE_CONTACTS',
                contacts
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);