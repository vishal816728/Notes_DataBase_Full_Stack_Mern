
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import MyNotes from './pages/MyNotes';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyProfile from './pages/MyProfile';
import {useState,useEffect} from "react"
import axios from "axios"
import CreateNote from './pages/CreateNote';
import UpdateNote from "./pages/UpdateNote"
import EditMyProfile from './pages/EditMyProfile';

function App() {
  const [notes,setNotes]=useState()
    
  const data1=localStorage.getItem('userInfo')
  const userInfo=(JSON.parse(data1))
  console.log(userInfo)
  const fetchData=async ()=>{
      if(userInfo){
      const config={
          headers:{
              Authorization:`Bearer ${userInfo.data.token}`
          }
      }
      try {
          var data=await axios.get("http://localhost:5000/api/notes",config)
          setNotes(data)
      } catch (err) {
          console.log(err)
      }
  }
}
  useEffect(()=>{
        fetchData()
  },[])
  return (
      <BrowserRouter>
        <main style={{minHeight:"100vh"}}>
        <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route path="/mynotes" element={<MyNotes notes={notes}/>}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/myprofile" element={<MyProfile />}></Route> 
                <Route path="/createnote" element={<CreateNote />}></Route>
                <Route path="/notes/update/:id" element={<UpdateNote />}></Route>
                <Route path="/editprofile" element={<EditMyProfile />}></Route>
            </Routes>
        <Footer />
        </main>
      </BrowserRouter>
  );
}

export default App;
