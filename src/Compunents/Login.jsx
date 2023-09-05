import React from "react";
import logo from '../images/logo.jpg'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = (props) =>{
  const [user, setuser] = useState({
    email:"",
    pass:""
  })
  
const [demo, setdemo] = useState()

const navigate = useNavigate()
  const handeloncheng = (e) =>{
    const { name , value} = e.target;
    setuser(prevState =>({
      ...prevState,
      [name]:value
    }))
  }
  const handelonsubmit = (e)=>{
    e.preventDefault()
    const {email , pass} = user;
    console.log(email , pass)
    setuser({
      email:"",
      pass:""
    });
    
    fetch("http://localhost:3000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        pass
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
        if(data.status === "ok"){
          console.log(data.data + "user login succes");
          alert("user Login SuccesFull");
          window.localStorage.setItem("token", data.data);
          navigate("/userdata")
          // setdemo("loginpage " + data.data)
        }else{
          alert("user Not Found")
        }
      });
  }
    return( <>

<div className="mt-10" >
  <div >
    <div className="flex flex-col items-center">
      <img className="h-10" src={logo} alt="Logo" />
    </div>
    <div className="mb-8">
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-2xl">Sign in to your account</h1>
      </div>
    </div>


    <div className="flex flex-col items-center">
  <div className="max-w-screen-sm w-full shadow-md border-2 w-11/12 mb-8	">
    <form onSubmit={handelonsubmit} className="p-8">
      <label htmlFor="email" className="block font-semibold text-lg">
        Email address
      </label>
      <input
      onChange={handeloncheng}
      name="email"
      value={user.email}
        id="email"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="email"
      />

<label htmlFor="password" className="block font-semibold text-lg mt-5">
        Password
      </label>
      <input
      onChange={handeloncheng}
      name="pass"
      value={user.pass}
        id="password"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="text"
      />
       <div className="text-right mr-9 mt-12  text-blue-700 font-bold">
        <Link to={'/'}> Forgot password </Link>
    </div>
    <div className="p-0 " style={{marginTop:"-0px"}}>
        <button  className="block w-full px-4 py-2 mt-2 border rounded-md  bg-blue-800 text-white font-semibold">Sign In</button>
    </div>
    </form>
   
      
    <div className="p-8"> <hr style={{color:"red",height:"2px",}} color="#EEEEEE" />  </div>
    <div className="text-center mb-6"><h1 >  Don't have account?  <span className="font-bold text-blue-700"> <Link to={'/signup'} > Sign Up Here </Link> </span></h1></div>
  </div>
</div>

  </div>
</div>












</>)
};
export default Login;