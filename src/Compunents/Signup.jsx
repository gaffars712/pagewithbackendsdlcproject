import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  const [user, setuser] = useState({
    fname:"",
    email:"",
    pass:""
    
  })
  const handelchange = (e)=>{
    const { name , value} = e.target;
    setuser(prevState =>({
      ...prevState,
      [name]:value
    }))
   
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const { fname, email, pass } = user;
    console.log(fname, email, pass);
    setuser({
      fname: "",
      email: "",
      pass: ""
    });
  
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data + "user registration");
      });
  }
  
  return (
    <>
      
      <div className="mt-10 mb-5" >
  <div >
    <div className="flex flex-col items-center">
      <img className="h-10" src={logo} alt="Logo" />
    </div>
    <div className="mb-8">
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-2xl">SignUp to your account</h1>
      </div>
    </div>


    <div className="flex flex-col items-center">
  <div className="max-w-screen-sm w-full shadow-md border-2 w-11/12	">
    <form  onSubmit={handlesubmit} className="p-8">


    <label htmlFor="name" className="block font-semibold text-lg">
        Full Name
      </label>
      <input
        id="name"
        name='fname'
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="text"
        value={user.fname}
        onChange={handelchange}
        
      />



      <label htmlFor="email" className="block font-semibold text-lg mt-5">
        Email address
      </label>
      <input
      name='email'
      value={user.email}
        id="email"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="email"
        onChange={handelchange}
      />

<label htmlFor="password" className="block font-semibold text-lg mt-5">
        Password
      </label>
      <input
      name='pass'
      value={user.pass}
        id="password"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="text"
        onChange={handelchange}
      />

{/* <label htmlFor="password" className="block font-semibold text-lg mt-5">
       re Password
      </label>
      <input
        id="password"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-700"
        type="text"
      /> */}
       <div className="text-right mr-9  text-blue-900 font-bold">
        {/* <Link to={'/'}> Forgot password </Link> */}
    </div>
    <div className="mt-8 " style={{marginTop:"35px"}}>
        <button   className="block w-full px-4 py-2 mt-2 border rounded-md  bg-blue-800 text-white font-semibold">Sign Up</button>
    </div>
    </form>
   
      
    <div className="p-8"> <hr style={{color:"red",height:"2px",}} color="#EEEEEE" />  </div>
    <div className="text-center mb-6"><h1 >  Allredy Have a account  <span className="font-bold text-blue-700"> <Link to={'/login'} > Sign In Here </Link> </span></h1></div>

  </div>
</div>

  </div>
</div>
    </>
  )
}

export default Signup;
