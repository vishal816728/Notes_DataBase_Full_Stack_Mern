import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion"
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
import axios from "axios"

const MyNotes = (props) => {
   
   const navigate=useNavigate()
   const createNoteHandler=()=>{
        navigate("/createnote")
   }
   const data=localStorage.getItem('userInfo')
   const userInfo=JSON.parse(data)
   const config={
    headers:{
        Authorization:`Bearer ${userInfo.data.token}`
       }
    }
   return (
    <div className='MyNotesContainer'>
        <Container>
            <h1 style={{marginBottom:"1rem"}}>My Notes</h1>  
            <Button variant='outline-primary' onClick={createNoteHandler} >Create Notes</Button>
             {  props.notes?
                 props.notes.data.map(item=>
                    <div className='accordionContainer'>
                    <Accordion key={item._id} className="flex-1" >
                    <Accordion.Item eventKey={item._id}>
                        <Accordion.Header>{item.title} 
                            <div className='accordionContainerbuttons'>
                                <Link to={`/notes/update/${item._id}`}><Button variant="outline-secondary" size="sm" className="mx-2">Edit</Button></Link>
                                <Button variant="outline-secondary" size="sm" onClick={async ()=>{
                                      await axios.delete(`http://localhost:5000/api/note/delete/${item._id}`,config)
                                      window.location.reload()
                                }}>Delete</Button>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.content}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </div>
                 ):""
             }
        </Container>
    </div>
  )
}

export default MyNotes