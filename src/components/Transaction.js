import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Card from 'react-bootstrap/Card';

function Transaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const blockNumber = await provider.getBlockNumber();
        const txList = [];
        for (let i = blockNumber; i >= 0; i--) {
          const block = await provider.getBlock(i);
          const blockTransactions = await Promise.all(
            block.transactions.map(async txHash => {
              const tx = await provider.getTransaction(txHash);
              return {
                from: tx.from,
                to: tx.to,
                value: ethers.utils.formatEther(tx.value),
                timestamp: new Date(block.timestamp * 1000).toLocaleString(),
              };
            })
          );
          txList.push(...blockTransactions);
        }

        setTransactions(txList);
      }
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h2 className='w-full my-4 text-center'>交易紀錄</h2>
      <div className='w-[80%] mx-auto my-0'>
        {transactions.map((tx, index) => (
        <Card
          bg={'light'}
          key={'light'}
          text={'dark'}
          className="my-4"
        >
          <Card.Header>#{index+1}</Card.Header>
          <Card.Body>
            <Card.Text>
                <p>From: {tx.from}</p>
                <p>To: {tx.to}</p>
                <p>Value: {tx.value} ETH</p>
                <p>Date: {tx.timestamp}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
    </div>
    </div>
  );

};

export default Transaction;