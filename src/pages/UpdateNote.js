import React,{useState} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const UpdateNote = () => {
    const [title,setTitle]=useState()
    const [content,setContent]=useState()
    const [category,setCategory]=useState()
    const navigate=useNavigate()

    const data=localStorage.getItem('userInfo')
    const userData=JSON.parse(data)

    const id=(window.location.pathname).slice(14)
    const submitHandler=async(e)=>{
        e.preventDefault()
        if(userData){
            const config={
                headers:{
                    Authorization:`Bearer ${userData.data.token}`
                }
            }
            try{
                const getTheData=await axios.get(`http://localhost:5000/notes/note/${id}`)
                if(getTheData){
                const callcreate=await axios.put(`http://localhost:5000/api/notes/update/${id}`,{
                    title,content,category
                },config)
                  if(callcreate){
                      alert("SuccessFully updated the new Note")
                      navigate("/mynotes")
                      window.location.reload()
                  }
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
            Update 
        </Button>
        </div>

    </Form>
    </div>
  )
}

export default UpdateNote