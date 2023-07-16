import React from 'react'
import { ethers } from "ethers";

const Candidates = ({candidates,putVote}) => {
  return (
    <>
    <br></br>
    <div className="flex gap-2 m-2 flex-wrap">{candidates.map(candidate =>{
        if(candidate[0]==''){
            return null;
        }
        else{
            return(
               
                <div className="bg-gray-100 w-[24.5%] flex flex-col rounded-md p-6">
                <p>{candidate.name}</p>
                <p className="text-sm py-2">{candidate[3]}</p>
                <div className="flex justify-between">
               <p className="text-sm py-2"> Votes:  {Number(candidate[4])}</p>
               <button className='bg-blue-600 w-[20%] rounded-sm p-1 mt-2  text-white' onClick={()=>{putVote(candidate[3])}}>Vote</button>
                </div>
                </div>
                
            )
        }
    })}</div>
    </>
  )
}

export default Candidates