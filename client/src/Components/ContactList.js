import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../JS/Actions/contact';
import Contact from './Contact';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state.contactReducer.contacts)
    const loadContacts = useSelector((state)=>state.contactReducer.loadContacts)

    useEffect(()=>{
        dispatch(getContacts())
        //eslint-disable-next-line
    },[])

    return (
        <div>
           {loadContacts?(
               <h3>Loading</h3>
           ):contacts.length === 0 ?(<h2>there is no data</h2>):(
               contacts.map((el)=> <Contact key={el._id} contact={el}  /> )
           )}
        </div>
    )
}

export default ContactList
