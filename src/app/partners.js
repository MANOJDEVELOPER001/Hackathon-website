import React from "react";
function Partners({image,borderclass,info,colorclass,para,bgclass}){
    return(
        <div className="group cursor-pointer ">
            <div className="flex items-center justify-center flex-col group-hover:scale-112 transition:transform duration-200">
                <img className="z-2 relative top-[42px] " src={image}/>
                <div className={`flex flex-col items-center text-center justify-center z-1 border-4 ${borderclass} w-[295px] h-[265px] rounded-[36px] shadow-md shadow-black `}>
                    <div className="flex flex-col justify-center ">
                        <p className={`${colorclass} text-[22px] font-bold mb-[15px]`}>{info}</p>
                        <p className="leading-[1.5rem] text-black text-[18px]">{para}</p>
                    </div>
                    <p className="text-black text-[16px] relative top-[60px] tracking-wider">Learn More</p>
                    <div className={`relative bottom-[4px] ${bgclass} w-[100px] h-[1.4px] top-[60px]`}>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Partners;