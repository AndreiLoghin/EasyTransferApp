import React from "react";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import logo from "../../images/logoFINAL.png";
const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-600 mt-5"/>
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer "> FAQ </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer "> Transaction fees </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer "> Cookies </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer "> Privacy </p>
                </div>
            </div>
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-50" />
            </div> 
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Join our community</p>
            </div>

            <div>
					<div className="p-5 flex flex-row items-center w-full text-white text-sm text-center">
							<div className="px-3">
					            <a href="https://www.facebook.com" target="_blank">
						        <p className="flex flex-row text-white text-sm text-center">Facebook {<FaFacebook fontSize={21} className="text-white" />}</p></a>
		                    </div>
							<div className="px-3">
					            <a href="https://twitter.com" target="_blank">
						        <p className="flex flex-row text-white text-sm text-center">Twitter {<FaTwitter fontSize={21} className="text-white" />}</p></a>
				            </div>
							<div className="px-3">
					            <a href="https://t.me" target="_blank">
						        <p className="flex flex-row text-white text-sm text-center">Telegram {<FaTelegram fontSize={21} className="text-white" />}</p></a>
				            </div>
					</div>
			</div>

        </div>
    );
}

export default Footer;