import React from 'react'
import { Row,
         Col,
         Form,
         Button } from 'react-bootstrap'
import {useState,useEffect} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"


const EditMyProfile = () => {
    const [user,setUser]=useState()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [pic,setPic]=useState()
    const navigate=useNavigate()
    
    useEffect(()=>{
        const data=localStorage.getItem('userInfo')
        const userData=JSON.parse(data)
        console.log(userData)
        setUser(userData)
    },[])

    const submitHandler=async (e)=>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:5000/api/user/update/${user.data._id}`,{
               name,email,pic
            })
            alert("Successfully update")
            navigate("/myprofile")
            window.location.reload()
        }catch(err){
            console.log(err)
        }
       
    }
    const postDetails = (pics) => {
        if (
          pics ===
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        ) {
          return console.log("Please Select an Image");
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "notesdb");
          data.append("cloud_name", "dtnefnqsv");
          fetch("https://api.cloudinary.com/v1_1/dtnefnqsv/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setPic(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
  return (user ?
    <div className='logincontainer'>
        <div className='Container d-flex'>
        <Row>
            <Form onSubmit={submitHandler} > 
                <Form.Group className="mb-3" default="hello" controlId="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder={user.data.name} value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder={user.data.email} value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
               <Form.Group className="mb-3 text-center" controlId="pic">
                <Form.Control type="file" placeholder="Profile pic" onChange={(e)=>postDetails(e.target.files[0])} ></Form.Control>
                </Form.Group>

            <div className='buttonlogincontainer'>
                <Button variant="primary" type="submit">
                Update
                </Button>
                </div>
            </Form>   
        </Row>
        </div>
    </div>:""
  )
}

export default EditMyProfile