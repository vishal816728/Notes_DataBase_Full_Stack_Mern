import React from 'react'
import Form from "react-bootstrap/Form"
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


const SignupPage = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [pic,setPic]=useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
    
    const navigate=useNavigate()
    
    const submitHandler=async (e)=>{
          e.preventDefault()
          const data=await axios.post('http://localhost:5000/api/users/register',{
                name:name,
                email:email,
                password:password,
                pic:pic
          })
          if(data){
            localStorage.setItem('userInfo',JSON.stringify(data))
            alert("Thank you for registering with us")
            navigate("/login")
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

  return (
    <div className='logincontainer'>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="username">
     <Form.Label>User Name</Form.Label>
     <Form.Control type="text" placeholder="Enter username" value={name} onChange={(e)=>setName(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3" controlId="email">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group className="mb-3" controlId="password">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
   </Form.Group>
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>
   <div className='buttonlogincontainer'>
   <Button variant="primary" type="submit">
     Sign up
   </Button>
   <small>Already Have an Account?<Link to="/login">Login Here</Link></small>
   </div>

   </Form>
 </div>
  )
}

export default SignupPage