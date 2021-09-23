import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { deleteContact,getContact } from '../JS/Actions/contact'
import { toggleTrue } from '../JS/Actions/edit'
const Contact = ({contact}) => {
    const dispatch =useDispatch()
    return (
        <div>
             <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://image.flaticon.com/icons/png/512/74/74472.png'
        />
        <Card.Header> {contact.name} </Card.Header>
        <Card.Meta> {contact.email}    </Card.Meta>
        <Card.Description>
          Phone: <strong> {contact.phone} </strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to={`/edit/${contact._id}`} >
          <Button basic color='green' 
          onClick={()=>{dispatch(getContact(contact._id));
                        dispatch(toggleTrue())}}>
            Edit
          </Button></Link>
          <Button basic color='red' 
          onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
        </div>
    )
}

export default Contact
