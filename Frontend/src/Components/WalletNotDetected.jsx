export function WalletNotDetected(){
    return(
        <div className="flex justify-center items-center flex-col w-full h-full absolute top-50 bottom-50 text-3xl font-bold text-black">
            Wallet Not Detected. Please Install <a className="link mt-6 bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href="https://metamask.io/download" target="_blank">
            Metamask Browser Extension 🦊 </a>
        </div>
    )
}