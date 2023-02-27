import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { FaUserTimes } from "react-icons/fa";
import { BsMouse2Fill } from "react-icons/bs"
import { GiMeshNetwork } from "react-icons/gi";
const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);

const ServicesSection = () => {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-bewtween md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2">
                        Make transactions   
                        <br/> right now
                        <br /> using our services 
                    </h1>
                </div>
            
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard 
                    color="bg-[#99E17B]"
                    title="Decentralized"
                    icon={<GiMeshNetwork fontSize={21} className="text-white" />}
                    subtitle="Trasactions take place on a global P2P network of users running Metamask."
                />
                <ServiceCard 
                    color="bg-[#111cf2]"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="We are looking for the best exchange rates to make your experience with us better."
                />
                <ServiceCard 
                    color="bg-[#F78706]"
                    title="Fastest transactions"
                    icon={<BsLightning fontSize={21} className="text-white" />}
                    subtitle="Start sending crypto in seconds, not hours or days. Fast execution, most transactions executed <10s"
                />
                <ServiceCard 
                    color="bg-[#F71606]"
                    title="No Identity Verification"
                    icon={<FaUserTimes fontSize={21} className="text-white" />}
                    subtitle="Get started in minutes. No need to wait for approval from a central authority."
                /><ServiceCard 
                    color="bg-[#6729e3]"
                    title="Easy to Use"
                    icon={<BsMouse2Fill fontSize={21} className="text-white" />}
                    subtitle="We've made all this sophistication simple—make your first trade in under 2 minutes!"
                />
            </div>
            </div>
        </div>
    );
}

export default ServicesSection;