import React from 'react';

const Home = () => {
  return (
    <>
 <div className="md:flex md:items-center md:pl-40 md:pt-40 bg-image ">
  <div className="md:w-2/5">
    <div>
      <h5 className="text-xs text-red-500">GET EVERY SINGLE SOLUTIONS.</h5>
    </div>
    <div className="mt-4">
      <h1 className="text-3xl md:text-4xl">
        I'm Designer <br /> {'user name'}
      </h1>
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
