import React from "react";
function Events({image,date,description}){
    return(
    <div className="w-[304px] bg-white h-[345px] shadow-black shadow-md rounded-[15px]">
        <img className="w-full rounded-t-[15px] object-cover h-[169px] mb-[7px]" src={image} alt="event-1"/>
        <div className="flex flex-row gap-[0px] mb-[12px] items-center">
            <div className="bg-[#f8194f] w-1/2 h-[30px] flex items-center justify-center">
                <p className="text-white">{date}</p>
            </div>
            <div className="relative left-[-10px] bg-[#f8194f] w-[50px] h-[50px] flex items-center justify-center rounded-full ">
                <div className="bg-white w-[20px] h-[20px] rounded-full"></div>
            </div>
        </div>
        <div className="pl-[12px] w-1/2 mb-[12px]">
            <p className="text-black font-bold text-[18px]">{description}</p>
        </div>
        <div className=" pl-[8px] flex items-center">
            <div className="w-fit  text-[#f8194f] border-[#f8194f] border-2 font-bold rounded-[15px] flex items-center justify-center  hover:text-[#f8194f] hover:shadow-sm shadow-black">
                <p className=" p-2 cursor-pointer">Register Now</p>
            </div>
        </div>
    </div>
    );
}
export default Events;