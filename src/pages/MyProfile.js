import React from 'react'
import Form from "react-bootstrap/Form"
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

const MyProfile = () => {
  const data=localStorage.getItem('userInfo')
  const userData=JSON.parse(data)
  console.log(userData)
  return (
    <div className='profileContainer'>
    <Card className="p-4 m-3 text-center justify-content-center ">
     <img src={userData.data.pic} width="100px" height="100px" className='userprofileimg' alt="" />

  
       <h3>{userData.data.name}</h3>
  

     <h3>{userData.data.email}</h3>
     </Card>
   <div className='buttonlogincontainer'>
   <Link to="/editprofile">
   <Button variant="primary" type="submit">
      Update
   </Button>
   </Link>
   </div>

 </div>
  )
}

export default MyProfile