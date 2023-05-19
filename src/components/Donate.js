import React , {useState, useEffect}from 'react';
import { ethers } from "ethers";
import { useLocation } from 'react-router-dom';


async function startPayment({setError, setTxs, ether, addr}){
    try {
        if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
    
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
          to: addr,
          value: ethers.utils.parseEther(ether)
        });
        setTxs([tx]);
      } catch (err) {
        setError(err.message);
      }
}
  
function Donate() {
    const location = useLocation();
    const locationState = location.state;

    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      setError();
      await startPayment({
        setError,
        setTxs,
        ether: data.get("ether"),
        addr: locationState
      });
    };

    function ErrorMessage(){
        if (!error) return null;
        return(
            <div className="alert alert-error mt-5">
              <div className="flex-1">
                <label>{error}</label>
              </div>
            </div>
        )
    }

    function TxList() {
        if (txs.length === 0) return null;
        return txs.map((item,index) => {
            return(
            <div key={item} className="alert alert-info mt-5">
                <div className="flex-1">
                  <label>{item.hash}</label>
                </div>
            </div>
            )
        })
    }

           
  
    return (
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Send ETH payment
            </h1>
            <div>
              <div className="my-5" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <input
                  type="text"
                  value={locationState}
                  className="border-1 border-solid rounded px-3 py-2"
                  style={{width:'500px'}}
                  readOnly
                />
              </div>
              <div className="my-5" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <input
                  name="ether"
                  type="number"
                  className="border-1 border-solid rounded px-3 py-2"
                  style={{width:'500px'}}
                  placeholder="$100"
                />
              </div>
            </div>
          </main>
          <footer className="p-4" style={{display:'block',justifyContent:'center',alignItems:'center'}}>
            <button
              type="submit"
              className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            >
              Pay now
            </button>
            {ErrorMessage()}
            {TxList()}
          </footer>
        </div>
      </form>
    );
  }

  export default Donate;