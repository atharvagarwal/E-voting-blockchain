export function ConnectWallet({connect}) {

    return (
        <div className="flex justify-center items-center flex-col w-full h-full absolute top-50 bottom-50">
      <div className="flex justify-center items-center flex-col w-full h-full font-bold text-3xl">
        <div>Please, connect to wallet to enter the application 🦊.</div>
        <br />
        <div>
          <button onClick={connect} className="bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Connect to Wallet
          </button>
        </div>
      </div>
      </div>
    )
  }