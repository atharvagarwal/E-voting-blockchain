import React, { useState } from 'react'

const RegisterCandidate = ({registerCandidate,display,setDisplay}) => {
  const [address,setAddress]=useState('')
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    registerCandidate(name,age,address);
  }

  return (
    <>
   {display?(
    <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity">

  <div class="fixed flex flex-col gap-2 items-center justify-center inset-0 z-10 overflow-y-auto">
   
        <form className="w-full max-w-sm bg-white p-16 rounded-md">
        <p className="text-xl font-medium text-gray-500 text-center pb-6 ">Register Candidate</p>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        type="text"
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
        Age
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        type="number"
        onChange={(e)=>{setAge(e.target.value)}}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="inline-full-name"
      >
       Address
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        type="text"
        onChange={(e)=>{setAddress(e.target.value)}}
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3" />
    <div className="md:w-2/3">
      <button
        className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  </div>
</form>
<button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>{setDisplay(false)}}>Close</button>
    </div>
    </div>
    </div>):(<></>)}
    </>
  )
}

export default RegisterCandidate