import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import DemoTransfers from "../utils/DemoTransfers";
import { shortAddress } from "../utils/shortAddress";

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {
    return (
        <div className="bg-[#292D36] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-xl border-[3px] p-3 border-[#40474B] hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3 ">
                <div className="display-flex justify-start w-full mb-6 p-2  ">
                    <a href={`https://rinkeby.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base"> From: {shortAddress(addressFrom)}  </p>
                    </a>
                    <a href={`https://rinkeby.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base"> To: {shortAddress(addressTo)} </p>
                    </a>
                    <p className="text-white text-base"> Amount: {amount} ETH </p>
                   
                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base"> Message: {message}</p>
                        </>
                    )}  
                </div>
                <div className="bg-[#72757E] p-3 px-4 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#FFFFFF] font-bold">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);
    

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions ">
            <div className="flex flex-col md:p-12 py-12 px-4 ">
                { currentAccount ? (
                    <a href={`https://rinkeby.etherscan.io/address/${currentAccount}`} target="_blank" rel="noreferrer">
                  <h3 className="w-96 center text-xl sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center text-sm font-light text-white text-white  bg-[#1A1A1B] cursor-pointer hover:bg-[#2F2F31] rounded-full ">
                    You can see your latest transactions here</h3>  </a>
                ):(
                    <h3 className="text-white text-3xl text-center my-2">Connect your account to see the latest transactions</h3>  
                )}
               
                <div className="flex flex-wrap justify-center items-center mt-5 ">
                    {[ ...transactions, ...DemoTransfers ].reverse().map((transactions, i) => (
                    <TransactionCard key={i} {...transactions} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;