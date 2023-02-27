import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { TbNetwork} from "react-icons/tb";
import { VscVmConnect } from "react-icons/vsc";
import { FaFileContract } from "react-icons/fa";

import { TransactionContext  } from "../context/TransactionContext";
import { Loader } from "./";
import { shortAddress } from "../utils/shortAddress";



const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name) }
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
    />
);

const WelcomePage = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !message ) return;

        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Send crypto to<br />  anyone, <br/> anywhere, <br/> anytime
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Friendliest place to send cyptocurrency fast and easy.<br/>
                        Get <span className="text-blue-500 font-light md:w-9/12 w-11/12 text-base">started</span> right now.
                    </p>
                    {!currentAccount && (
                        <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                        </button>

                    )}
               
                        <br/><br/>
                    <div className="flex-col w-full justify-center items-center ">
                        <div className="mx-auto grid md:lg:xl:grid-cols-2 background: #eee box-shadow: 0 8px 8px -4px ">

                            <div className="p-1 flex flex-col items-center text-center cursor-pointer">
                                <div className="p-6 rounded-full bg-red-500 text-white text-3xl shadow-lg shadow-red-200"><SiEthereum /> </div>
                                <p className="text-xl font-medium text-white mt-3"> Send ETH fast and easy </p>
                            </div>

                            <div className="p-1 flex flex-col items-center text-center cursor-pointer">
                                <div className="p-6 rounded-full bg-orange-500 text-white text-3xl shadow-lg shadow-orange-200"><VscVmConnect /> </div>
                                <p className="text-xl font-medium text-white mt-3"> Metamask pairing </p>     
                            </div>

                            <div className="p-10 flex flex-col items-center text-center cursor-pointer">
                                <div className="p-6 rounded-full bg-lime-500 text-white text-3xl shadow-lg shadow-lime-200"><FaFileContract /></div>
                                <p className="text-xl font-medium text-white mt-3"> Interaction with smart contracts </p>                
                            </div>

                            <div className="p-10 flex flex-col items-center text-center cursor-pointer">
                                <div className="p-6 rounded-full bg-teal-500 text-white text-3xl shadow-lg shadow-teal-200"><TbNetwork /></div>
                                <p className="text-xl font-medium text-white mt-3"> See your transactions on the blockchain </p>             
                            </div>                             
                        </div>
                    </div>
                </div>
                            
                <div className="flex flex-col flex-1  items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-20 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start ">
                                <div className="w-21 h-21 rounded-full flex justify-center center items-center">
                                    <SiEthereum fontSize={70} color="#fff"/>
                                </div>
                            </div>
                            <div>
                                <p className=" text-white font-light text-sm">
                                    {shortAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    ETH 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism " >
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
                        <Input placeholder="Amount of ETH" name="amount" type="number" handleChange={handleChange}/>
                        <Input placeholder="Message" name="message" type="text" handleChange={handleChange}/>

                        <div className="h-[1px] w-full bg-gray-600 my-2"/>

                        { isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#40474B] rounded-full cursor-pointer"
                            >
                            Send Now
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;