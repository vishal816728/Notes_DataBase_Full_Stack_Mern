import React,{useState} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreateNote = () => {
    const [title,setTitle]=useState()
    const [content,setContent]=useState()
    const [category,setCategory]=useState()
    const navigate=useNavigate()

    const data=localStorage.getItem('userInfo')
    const userData=JSON.parse(data)

    const submitHandler=async(e)=>{
        e.preventDefault()
        if(userData){
            const config={
                headers:{
                    Authorization:`Bearer ${userData.data.token}`
                }
            }
            try{
                const callcreate=await axios.post("http://localhost:5000/api/note",{title,content,category},config)
                  if(callcreate){
                      alert("SuccessFully Added the new Note")
                      navigate("/mynotes")
                      window.location.reload()
                  }
            }catch(err){
                alert(err)
            }
        }
    }
  return (
    <div className='logincontainer'>
    <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" varaint="outline-primary" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Content" onChange={(e)=>setContent(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
             <Form.Label>Category</Form.Label>
             <Form.Control type="text" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)}></Form.Control>
        </Form.Group>
        <div className='buttonlogincontainer'>
        <Button variant="primary" type="submit">
            Create 
        </Button>
        </div>

    </Form>
    </div>
  )
}

export default CreateNote