import React, { useState } from 'react'

const RegisterVoter = ({registerVoter}) => {
  const [address,setAddress]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    registerVoter(address);
  }

  return (
    <div>
    <form className="w-full max-w-sm flex p-2">
    <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <label
        className="block text-black text-md font-bold md:text-right mb-1 md:mb-0 pr-1"
        htmlFor="inline-full-name"
      >
       Whitelisting
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        type="text"
        onChange={(e)=>{setAddress(e.target.value)}}
        placeholder='voter public address'
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3" />
    
      <button
        className="bg-blue-600 hover:bg-blue-700 shadow m-2 rounded-md p-2 mt-2 text-white"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
   
  </div>
</form>

    </div>
  )
}

export default RegisterVoter