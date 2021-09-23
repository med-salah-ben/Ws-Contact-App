import { EDIT_CONTACT, GET_CONTACT, GET_CONTACT_FAIL,GET_CONTACT_LOAD,GET_CONTACT_SUCCESS } from "../Constant/contact"
import axios from "axios"

export const getContacts=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result = await axios.get(`/api/contact`)
        dispatch({type:GET_CONTACT_SUCCESS,payload: result.data.response})
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
        console.log(error)
    }
}

export const deleteContact = (id)=>(dispatch)=>{
    axios
    .delete(`/api/contact/${id}`)
    .then((res=>dispatch(getContacts())))
    .catch((err)=>console.log(err))
}
export const getContact = (id)=>(dispatch)=>{
    axios.get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_CONTACT,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

//edit contact
export const editContact = (id,user)=>(dispatch)=>{
    axios.put(`/api/contact/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_CONTACT,payload:res.data.msg})
    })
    .then(dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
//post Contact
export const postContact = (user)=>async(dispatch)=>{
    try {
        await axios.post(`/api/contact/post`,user)
        dispatch(getContacts())
    } catch (error) {
        console.log(error.response)
    }
}
