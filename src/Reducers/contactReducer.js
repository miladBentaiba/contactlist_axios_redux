var contacts=[
    {   _id:'1',
        name:'yosra',
        phone:'2323232323',
        email:'yosra@gmail.com'
    },
    {   _id:'2',
        name:'ness',
        phone:'000000',
        email:'nessrine@gmail.com'
    }
]

const contactReducer=(state=contacts,action)=>
{
  switch(action.type)
  {
      case 'ADD_CONTACT' :
      return (
          state.concat(action.newcontact)
      )

      case 'EDIT_CONTACT':
      return (
          state.map(el=>el._id===action.editcontact._id? el=action.editcontact:el)
      )
      case 'REMOVE_CONTACT':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_CONTACTS':
      return(
          state=action.contacts
      )
      default :
      return state
  }
}
export default contactReducer