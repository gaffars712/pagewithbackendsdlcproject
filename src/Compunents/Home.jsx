import React, { useEffect,useState } from 'react';

const Home = (props) => {
  const [userdata, setuserdata] = useState("")

 useEffect(() => {
  fetch("http://localhost:3000/userdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token")
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data + "user registration");
        setuserdata(data.data)
      });
 
 }, [ ])
 
    


  console.log(userdata)
  return(
    <>
 <div className="md:flex md:items-center md:pl-40 md:pt-40 bg-image ">
  <div className="md:w-2/5">
    <div>
      <h5 className="text-xs text-red-500">GET EVERY SINGLE SOLUTIONS.</h5>
    </div>
    <div className="mt-4">
      <h1 className="text-3xl md:text-4xl">
        I'm Designer <br /> {userdata.fname}
      </h1>
      <br></br>
      <h4>My Gmail Id is : - {userdata.email}</h4>
    </div>
    <p className="text-sm mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores harum
      corrupti recusandae, aspernatur error optio velit, quo eos nulla sequi
      architecto, quia iste? Error quisquam reprehenderit nam numquam ut neque!
    </p>
    <button className="bg-red-500 text-white w-32 h-10 mt-4 rounded-full">
      Learn More...
    </button>
    <div style={{marginBottom:"18rem"}}></div>
  </div>
  

</div>

      
    </>
  )
}

export default Home;
