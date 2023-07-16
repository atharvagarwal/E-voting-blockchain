import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import contractAddress from "./contracts/contract-address-localhost.json";
import Voting from "./contracts/Voting.json";
import { ethers } from "ethers";
import { WalletNotDetected } from "./Components/WalletNotDetected";
import { ConnectWallet } from "./Components/ConnectWallet"
import RegisterCandidate from './Components/RegisterCandidate';
import RegisterVoter from './Components/RegisterVoter';
import Candidates from "./Components/Candidates"

const HARDHAT_NETWORK_ID = Number(31337)
function App() {
  const [selectedAddress, setSelectedAddress] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [candidates, setCandidates] = useState([]);
  const [votingStatus,setVotingStatus] = useState(undefined);
  const [winner,setWinner] = useState([]);
  const [display,setDisplay] = useState(false);
  //contract initialization based functions
  async function connectWallet() {
    try {
      const [address] = await window.ethereum.request({method: "eth_requestAccounts"});

      await checkNetwork();
      initiliazeDapp(address);

      window.ethereum.on("accountsChanged", ([newAddress]) => {
        if (newAddress === undefined) {
          setContract(undefined);
          setSelectedAddress(undefined);
          setCandidates([undefined]);
          setWinner([]);
          setVotingStatus(undefined);
          return;
        }
        initiliazeDapp(newAddress);
      });
      
    } catch(e) {
      console.error(e.message);
    }
  }

  async function initiliazeDapp(address) {
    setSelectedAddress(address);
    const contract = await initContract();
    getCandidates(contract)
    votingState(contract)
  }

  async function initContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
      contractAddress.Voting,
      Voting.abi,
      await provider.getSigner(0)
    );

    setContract(contract);
    return contract;
  }

  async function switchNetwork() {
    const chainIdHex = `0x${HARDHAT_NETWORK_ID.toString(16)}`;
    
    return await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{chainId: chainIdHex}]
    });
  }

  async function checkNetwork() {
    if (window.ethereum.networkVersion !== HARDHAT_NETWORK_ID.toString()) {
      return switchNetwork();
    }

    return null;
  }

  //Calling Smart Contract Functions

  async function registerCandidate(name,age,cAddress){
    try{
      const tx = await contract.registerCandidates(name,age,cAddress);
      const receipt=await tx.wait();
      if(receipt.status===0){
        throw new Error("Transaction Failed");}
      else{
        alert('candidate registered succesfully')
        getCandidates(contract);
      }
    }
    catch(e){
      alert('error '+e)
    }
}

async function registerVoter(vAddress){
  try{
    const tx = await contract.whiteListAddress(vAddress);
    const receipt=await tx.wait();
    if(receipt.status===0){
      throw new Error("Transaction Failed");}
    else{
      alert('voter whitelisted succesfully')
    }
  }
  catch(e){
    alert('error '+e)
  }
}

async function registerVoter(vAddress){
  try{
    const tx = await contract.whiteListAddress(vAddress);
    const receipt=await tx.wait();
    if(receipt.status===0){
      throw new Error("Transaction Failed");}
    else{
      alert('voter whitelisted succesfully')
    }
  }
  catch(e){
    alert('error '+e)
  }
}

async function getCandidates(contract){
  try{
    const candidates = await contract.getAllCandidate();
    if(candidates.length>0){
      setCandidates(candidates)
      console.log(candidates);
    }
    else{
      setCandidates([]);
    }
    
  }
  catch(e){
    console.log(e.message);
  }
}

async function startVoting(contract){
  try{
    const tx = await contract.startVoting();
    const receipt=await tx.wait();
    const status = await contract.votingStatus();
    setVotingStatus(status);
    if(receipt.status===0){
      throw new Error("Transaction Failed");}
    else{
      alert('voting started')
    }
  }
    
  catch(e){
    alert(e.message);
  }
}

async function stopVoting(contract){
  try{
    const tx = await contract.stopVoting();
    const receipt=await tx.wait();
    const status = await contract.votingStatus();
    setVotingStatus(status);
    if(receipt.status===0){
      throw new Error("Transaction Failed");}
    else{
      alert('voting stopped')
    }
  }
    
  catch(e){
    alert(e.message);
  }
}

async function getCandidates(contract){
  try{
    const candidates = await contract.getAllCandidate();
    if(candidates.length>0){
      setCandidates(candidates)
      console.log(candidates);
    }
    else{
      setCandidates([]);
    }
    
  }
  catch(e){
    console.log(e.message);
  }
}

async function putVote(address){
  try{
    const tx = await contract.putVote(address);
    const receipt=await tx.wait();
    if(receipt.status===0){
      throw new Error("Transaction Failed");}
    else{
      alert('vote casted')
      getCandidates(contract)
    }
  }
    
  catch(e){
    alert(e.message);
  }
}

async function getWinner(){
  try{
    const winner = await contract.getWinner();
    if(candidates.length>0){
      setWinner(winner)
      console.log(winner);
    }
    else{
      setWinner([]);
    }}
    catch(e){
      alert(e.message);
    }
}

async function votingState(contract){
  try{
    const status = await contract.votingStatus();
    setVotingStatus(status);
    }
    catch(e){
      alert(e.message);
    }
}



  //Wallet Conditions
  if (!window.ethereum) {
    return <WalletNotDetected />
  }

  if (!selectedAddress) {
    return <ConnectWallet connect={connectWallet} />
  }

  return (
    <>
    <div className="flex justify-between">
     <div className="p-2">
     <button className='m-1 shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={()=>{startVoting(contract);
    
    }}>Start Voting</button>
     <button className='shadow m-1 bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={()=>{stopVoting(contract);
    
    }}>Stop Voting</button>
  <button className='shadow m-1 bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={()=>{setDisplay(true);
    
  }}>Register Candidate</button>

<button className='shadow m-1 bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={()=>{getWinner(contract);
    
  }}>Get Winner</button></div>
   <RegisterVoter registerVoter={registerVoter}></RegisterVoter>
   </div>
 <p className="p-2 font-bold text-3xl text-center">{votingStatus? "Voting Started":"Voting Ended"}<br></br></p>
 <p className="pb-1 font-bold text-2xl text-center text-red-600">{winner.length!==0? `The winner is ${winner}`:<></>}<br></br></p>

  <Candidates candidates={candidates} putVote={putVote}></Candidates>
 {display?<RegisterCandidate registerCandidate={registerCandidate} display={display} setDisplay={setDisplay}></RegisterCandidate>:<></>}
    </>
  )
}

export default App
