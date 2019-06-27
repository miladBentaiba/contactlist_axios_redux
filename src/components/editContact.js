import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditContact extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            phone:'',
            email:''
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>

    {
        this.setState({
            ...this.props.contacts.filter(el=>el._id===this.props._id)[0]
        })
    }
    editContact=()=>
    {
       axios.put(`/edit-contact/${this.state._id}`,{
           name:this.state.name,
        phone:this.state.phone,
        email:this.state.email
     }) 
      .then(()=>this.props.editContactReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.contacts)
        return ( 
            <div className='add-contact-container'>
            <h1>Edit Contact</h1>
             Name :
             <input  type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
             Phone :
             <input  type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
             Email :
             <input  type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
             <Link to='/contacts'>
             <button onClick={this.editContact}>Edit Contact </button>
             </Link>

            </div> 
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
        editContactReducer:editcontact=>
        {
            dispatch({
                type:'EDIT_CONTACT',
                editcontact
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);