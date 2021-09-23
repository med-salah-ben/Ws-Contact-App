import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editContact,postContact } from '../JS/Actions/contact'
import { Link } from 'react-router-dom'

const Add = () => {
    const [user,setUser]=useState({name:"",email:"",phone:""})
    const userReducer = useSelector((state)=>state.contactReducer.user)
    const edit =useSelector((state)=>state.editReducer.edit)
    const dispatch = useDispatch()

    useEffect(()=>{
        edit? setUser(userReducer) : setUser({name:"",email:"",phone:""})
    },[userReducer,edit])

    const handleContact = ()=>{
      if(!edit){
          dispatch(postContact(user))
      }else {
          dispatch(editContact(userReducer._id,user))
      }
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div>
              <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' name="name" value={user.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' name="email" value={user.email} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input placeholder='Phone' name="phone" value={user.phone} onChange={handleChange} />
    </Form.Field>
    <Link to="/">
    <Button type='submit' onClick={handleContact}>  {edit? "Edit" : "Add Contact"} </Button>
    </Link>
  </Form>
        </div>
    )
}

export default Add
