import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';

function MetaMask() {
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
        };
        checkMetamaskAvailability();
      }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  function Disconnect(){
    setAccountAddress('')
    setAccountBalance('')
    setIsConnected(false)
  }

  
    return (
        <div>
        <header>
          {haveMetamask ? (
            <div>
              {isConnected ? (
                <div>
                  <div>
                    <p>Address:</p>
                    <p>
                      {accountAddress.slice(0, 4)}...
                      {accountAddress.slice(38, 42)}
                    </p>
                  </div>
                  <div>
                    <p>Wallet Balance:</p>
                    <p>{accountBalance}</p>
                  </div>
                </div>
              ) : (
                <text>Hello</text>
              )}
              {isConnected ? (
                <button onClick={() => Disconnect()}>
                DisConnect
              </button>
              ) : (
                <button onClick={connectWallet}>
                  Connect
                </button>
              )}
            </div>
          ) : (
            <p>Please Install MataMask</p>
          )}
        </header>
      </div>
  );
}

export default MetaMask;