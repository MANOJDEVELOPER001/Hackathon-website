"use client"
import SwiperComponent from "./script";
import SwiperComponent1 from "./scripts";
import Events from "./events";
import Partners from "./partners";
import emailjs from 'emailjs-com';
 // Import SwiperComponent
import Image from "next/image";
import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {

  const scrollToEvents = () => {
    const section = document.getElementById("events");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = { ...formData }; // clone the current state
  
    setformData({
      name: '',
      number: '',
      email: '',
      subject: '',
      message: ''
    });
  
    emailjs.send(
      'service_luwocrj',
      'template_ilsjgij',
      templateParams,
      '4Vz7qDJTdeNwZ4HNj'
    )
    .then((res) => {
      console.log('Email sent successfully:', res);
    })
    .catch((err) => {
      console.error('Email send failed:', err);
    });
  };
  const scrollToPartners=()=>{
    const section1=document.getElementById("partners");
    if(section1){
      section1.scrollIntoView({behavior:"smooth"});
    }
  };
  const scrollToCommunity=()=>{
    const section2=document.getElementById("community");
    if(section2){
      section2.scrollIntoView({behavior:"smooth"});
    }
  }
  const[formData,setformData]=useState({
    name:'',
    number:'',
    email:'',
    subject:'',
    message:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const words=["Company/Organisation","Little Minds","Startups","Hackathon & Bootcamp"];
  const colors=["text-red-400", "text-green-500", "text-blue-400"]
  const[index,setIndex]=useState(0);
  const[indexs,setIndexs]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setIndex(prev => (prev+1)%words.length);
    },2000);
    return()=>clearInterval(interval);
  },[]);
  useEffect(()=>{
    const intervals=setInterval(()=>{
      setIndexs(prevs=>(prevs+1)%colors.length);
    },1800);
    return()=>clearInterval(intervals);
  },[]);
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>My Awesome Page Title</title>
        <meta name="description" content="This is a cool hackathon page!" />
      </Head>
      <div className="flex flex-col md:flex-row md:items-center p-4">
    <div className="cursor-pointer text-[29px] font-extrabold text-black flex items-center">
      <span className="mr-1">Hackathon</span>
      <span className="text-yellow-400">⚡</span>
    </div>
    <div className="mt-4  md:ml-auto flex flex-wrap gap-4 text-[16px] font-bold text-black">
      <p onClick={scrollToPartners} className="cursor-pointer nav-item relative">Partners</p>
      <p onClick={scrollToEvents} className="cursor-pointer nav-item relative">Events</p>
      <p onClick={scrollToCommunity} className="cursor-pointer nav-item relative">Community</p>
      <p className="cursor-pointer nav-item relative">Hackathon</p>
      <p className="cursor-pointer nav-item relative">Sign in</p>
      <div className="bg-[#f8194f] text-white border-[#f8194f] relative top-[-5px] border-2 rounded-[15px] hover:bg-white hover:text-[#f8194f] hover:shadow-md shadow-black">
        <p className="p-2 cursor-pointer">Register Now</p>
      </div>
    </div>
  </div>


      <div className="flex flex-row  gap-15">
        <div className="ml-[60px] flex-wrap mt-[50px] flex flex-col w-[50vw]">
          <div className="flex flex-wrap flex-row font-extrabold text-[21px] text-[#f8194f] gap-[10px]">
            <p>Skill  |</p>
            <p>Upskill  |</p>
            <p>Hackathon  |</p>
          </div>
          <div className="mt-[30px]">
            <p className="font-extrabold tracking-tighter text-[45px] text-black leading-tight">
              Enhance your skills with Hackathon
            </p>
          </div>
          <div className="mt-[30px] text-black text-[19px] font-bold leading-loose">
            <p>
              An Experiential learning platform helping Students, Developers,
              Professionals & Startups to Skill, Upskill and Reskill themselves.
            </p>
          </div>
          <div className="bg-[#f8194f] max-w-fit mt-[50px] text-white font-semibold rounded-[13px] hover:bg-white hover:text-[#f8194f] border-2 border-[#f8194f] hover:shadow-md shadow-black transition-all duration-200 ease-in-out">
            <p className="pt-6 pb-6 pr-10 pl-10 cursor-pointer">Get Started</p>
          </div>
        </div>

        <div className="w-[900px] mt-[50px]">
          <SwiperComponent />
        </div>
      </div>

      <div className="mb-[90px] flex flex-col justify-center items-center mt-[40px] text-[27px] text-black gap-[8px] font-bold">
        <div className="flex flex-row">
        <p className="text-center">Trusted by 132 Global</p>
        <p className="text-center">Corporations</p>
        </div>
        <div id="partners" className="mt-[30px] flex-wrap flex flex-row gap-[52px] items-center justify-center">
              <Image 
                src="/microsoft.png"
                height={17}
                width={157}
                alt="microsoft"
              />
              <Image 
                src="/Uber.png"
                height={17}
                width={157}
                alt="uber"
              />
              <Image 
                src="/github.png"
                height={17}
                width={157}
                alt="uber"
              />
              <Image 
                src="/spark.png"
                height={17}
                width={157}
                alt="spark"
              />
              <Image 
                src="/Adobe.png"
                height={17}
                width={157}
                alt="Adobe"
              />
              <Image 
                src="/Intuit.png"
                height={17}
                width={157}
                alt="Intuit"
              />
        </div>
      </div>
      <div  className="mb-[50px] text-green-600 flex flex-col items-center justify-center tracking-widest text-[15px]">
          <p>Our Partners</p>
          <div className="mt-[8px] w-[110px] h-[1px] bg-green-600 "></div>
      </div>
      <div className={"mb-[45px] text-[35px] gap-[10px] flex items-center justify-center font-bold "}>
        <p className="text-black">For</p>
        <span className={`${colors[indexs]}`}>{words[index]}</span>
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-[26px]">
        <Partners image="/pink.svg" borderclass={"border-[#F8194F]"} bgclass={"bg-[#F8194F]"}  colorclass={"text-[#F8194F]"} info={"Hackathon & Bootcamp"} para={"Participate in various bootcamps, hackathons and upskill yourself."}/>
        <Partners image="/yellow.svg" borderclass={"border-[#FED02F]"} bgclass={"bg-[#FED02F]"}  colorclass={"text-[#FED02F]"} info={"Startups"} para={"Participate in various startup challenges, interact with mentors."}/>
        <Partners image="/green.svg" borderclass={"border-[#469E0F]"} bgclass={"bg-[#469E0F]"} colorclass={"text-[#469E0F]"} info={"Jobs / Internships"} para={"Get your business problem solved by the Innovators and Startups."}/>
        <Partners image="/blue.svg" borderclass={"border-[#00A4EF]"} bgclass={"bg-[#00A4EF]"} colorclass={"text-[#00A4EF]"} info={"Little Minds"} para={"Participate in various customised challenges to get your first brush."}/>
      </div>
      <div className="bg-[rgb(246,245,245)] pb-[30px] mb-[30px]" id="events">
        <div className="mt-[40px] flex justify-center items-center tracking-widest text-[#f8194f] font-bold text-[15px]">
          <p className="mt-[20px]">CURRENT EVENTS</p>
        </div>
        <div className="mt-[40px] pb-[50px]  flex flex-wrap justify-center items-center flex-row gap-[10px] font-bold">
          <p className="text-black text-[35px]  ">Our</p>
          <p className="text-[#f8194f] text-[35px]">Current Events</p>
        </div>
        <div className="w-[98vw] flex items-center flex-wrap  justify-center">
            <SwiperComponent1/>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="mt-[80px] cursor-pointer tracking-wide text-[18px]  text-[#f8194f]">Explore all events</p>
          <div className=" relative w-[150px] h-[1px] bg-[#f8194f]"></div>
        </div>
      </div>
      <div id="community" className=" flex flex-wrap items-center flex-col justify-center">
        <p className="tracking-widest text-[#00A4EF] text-[14px] font-bold">OUR COMMUNITY</p>
        <div className="font-bold  text-[32px] tracking-wide  mt-[30px] flex flex-wrap flex-row gap-[8px] items-center justify-center">
            <p className="text-center text-black">Join a</p>
            <p className=" text-center text-[#FED02F]">Community</p>
            <p className="text-center text-black">with a strong drive to excel</p>
        </div>
        <div className="flex flex-row gap-[40px] mb-[40px] tracking-widest">
          <div className="p-[16px] h-[130px] rounded-[15px] mt-[60px] gap-[17px] mb-[40px] w-[270px] flex flex-row bg-[rgb(246,245,245)]">
            <Image
              src={"./developers.svg"}
              alt="developer"
              height={113}
              width={100}
              className="bg-[#f8194f] rounded-[15px] "
            />
            <div className="flex text-black flex-col items-center justify-center">
              <p className="font-bold text-[30px] leading-wide">100k+</p>
              <p className="text-[19px] leading-wide">Active</p>
              <p className="text-[19px] leading-wide">Developers</p>
            </div>
          </div>
          <div className="p-[16px] h-[130px] rounded-[15px] mt-[60px] gap-[17px] mb-[40px] w-[270px] flex flex-row bg-[rgb(246,245,245)]">
            <Image
                src={"./hackathon.svg"}
                alt="hackathon"
                height={113}
                width={100}
                className="bg-[#469E0F] rounded-[15px]"
              />
              <div className="flex text-black flex-col items-center justify-center">
                <p className="font-bold text-[30px] leading-wide">500+</p>
                <p className="text-[19px] leading-wide">Active</p>
                <p className="text-[19px] leading-wide">Hackathons</p>
              </div>
          </div>
          <div className="p-[16px] h-[130px] rounded-[15px] mt-[60px] gap-[17px] mb-[40px] w-[270px] flex flex-row bg-[rgb(246,245,245)]">
            <Image
                src={"./developers.svg"}
                alt="developer"
                height={113}
                width={100}
                className="bg-[#FED02F] rounded-[15px]"
              />
              <div className="flex text-black flex-col items-center justify-center">
                <p className="font-bold text-[26px] leading-wide">132+</p>
                <p className="text-[18px] leading-wide">Companies</p>
                <p className="text-[18px] leading-wide">Participated</p>
              </div>
          </div>
          <div className="p-[16px] h-[130px] rounded-[15px] mt-[60px] gap-[17px] mb-[40px] w-[270px] flex flex-row bg-[rgb(246,245,245)]">
            <Image
                src={"./country.svg"}
                alt="country"
                height={113}
                width={100}
                className="bg-[#00A4EF] rounded-[15px]"
              />
              <div className="flex text-black flex-col items-center justify-center">
                <p className="font-bold text-[26px] leading-wide">17</p>
                <p className="text-[18px] leading-wide">Countries</p>
              </div>
          </div>
        </div>
        <div className=" mb-[40px] bg-black h-[1.2px] w-[1250px]"></div>
        <div className="mb-[70px] text-black text-[18px] flex flex-col gap-[12px] items-center justify-center tracking-widest">
          <p className="text-center">Join the community which has a strive to excel - Be a part of our community and learn about various upcoming</p>
          <p className="text-center">initiatives and opportunities.</p>
        </div>
        <div className="mb-[60px] cursor-pointer text-[24px] text-white bg-[#00A4EF] rounded-[9px]  hover:bg-white hover:border-[#00A4EF] border-2 hover:text-[#00A4EF] hover:shadow-md shadow-black transition-all duration-200 ease-in-out">
            <p className="p-[12px]">Join Our Community</p>
        </div>
      </div>
      <div className="bg-[rgb(246,245,245)] flex flex-col gap-[12px] items-center justofy-center">
          <p className="font-bold text-[#00A4EF] text-[14px] tracking- pt-[30px]">OUR PRESENCE</p>
        <div className="font-bold pb-[20px] text-[39px] mt-[30px] flex flex-wrap flex-row gap-[8px] items-center justify-center">
            <p className="text-center text-black">We are in </p>
            <p className=" text-center text-[#FED02F]">17 countries</p>
            <p className="text-center text-black">, and expanding!</p>
        </div>
        <div className="flex flex-col gap-[12px] pb-[15px] ">
            <p className="text-black font-bold text-[18px]">India | Australia | Canada | Sri Lanka | Bangladesh | Indonesia | Vietnam | Philippines | Singapore | USA | Kenya |</p>
            <p className="text-black font-bold text-[18px] text-center">Zambia | Zimbabwe | Nigeria | Portugal | Ukraine | Mexico</p>
        </div>
      </div>

      <div className="flex flex-wrap flex-row mt-[20px] mb-[50px] items-center ml-[40px] gap-[120px]">
        <div className="flex flex-col gap-[30px]">
            <p className="text-black font-bold text-[44px]">Contact Us</p>
            <p className="text-black text-[20px]">We are keen to hear from you :)</p>
            <div>
              <form className="text-black flex flex-col gap-[30px]" onSubmit={handleSubmit}>
                <div className="flex gap-[30px] flex-row">
                  <input className="bg-[#FFF4CB] h-[36px] w-[270px] p-[7px] rounded-[15px] border border-[#86B7FE] focus:border-2 focus:border-[#86B7FE] focus:bg-white focus:outline-none" type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required />
                  <input className="bg-[#FFF4CB] h-[36px] w-[270px] p-[7px] rounded-[15px] border border-[#86B7FE] focus:border-2 focus:border-[#86B7FE] focus:bg-white focus:outline-none" type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                </div>
                <div className="flex gap-[30px] flex-row">
                  <input className="bg-[#FFF4CB] h-[36px] w-[270px] p-[7px] rounded-[15px] border border-[#86B7FE] focus:border-2 focus:border-[#86B7FE] focus:bg-white focus:outline-none" type="tel" name="number" placeholder="Phone Number" onChange={handleChange} value={formData.number} required/>
                  <input className="bg-[#FFF4CB] h-[36px] w-[270px] p-[7px] rounded-[15px] border border-[#86B7FE] focus:border-2 focus:border-[#86B7FE] focus:bg-white focus:outline-none" type="text" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required/>
                </div>
                <textarea className="bg-[#FFF4CB]  w-[570px] p-[7px] rounded-[9px] border border-[#86B7FE] focus:border-2 focus:border-[#86B7FE] focus:bg-white focus:outline-none" name="message" placeholder="Message" onChange={handleChange} value={formData.message} required />
                <button className="text-white rounded-[15px] bg-[#f8194f] px-[37px] py-[17px] w-fit hover:border-[#f8194f] border-1 hover:bg-white hover:shadow-sm shadow-black hover:text-[#f8194f]" type="submit">Submit</button>
              </form>
            </div>
        </div>
        <div>
            <img className="w-[596px] h-[452px]" src="/contactImg.svg"/>
        </div>
      </div>
      <div className="flex flex-col gap-[60px] bg-[#EBEBEB] pb-[20px]">
          <div className=" flex flex-row gap-[80px]">
                <div className="ml-[80px] pt-[40px]">
                  <div className="cursor-pointer text-[29px] font-extrabold text-black flex items-center">
                      <span className="mr-1">Hackathon</span>
                      <span className="text-yellow-400">⚡</span>
                  </div>
                  <div className="flex flex-col mt-[15px] gap-[10px] text-[#5A5A5A] text-[15px] leading-widest">
                    <p>For any queries or requests, feel free to reachout to us using the below</p>
                    <p>mentioned email or using connect us button below</p>
                  </div>
                  <div className="flex flex-col mt-[35px] gap-[10px] text-[#5A5A5A] text-[15px] leading-widest">
                      <p>India</p>
                      <p>Address: Tce, Thirupprankundram, Madurai, Tamil Nadu. </p>
                      <p>Email: hackathon@gmail.com</p>
                      <p>Phone No: +91 9789 646488</p>
                  </div>
                  <div className="flex flex-col mt-[35px] gap-[10px] text-[#5A5A5A] text-[15px] leading-widest">
                      <p>Canada</p>
                      <p>Address: 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</p>
                      <p>Email: hackathon@gmail.com</p>
                      <p>Phone No: +91 984278899</p>
                  </div>
                </div>
                <div className="flex flex-col items-center  justfiy-center gap-[35px] text-[#5A5A5A] pt-[40px]">
                        <p className="text-[25px]">Quick Links</p>
                        <div className="flex flex-col ites-center justify-center gap-[15px]">
                              <p onClick={scrollToEvents} className="hover:text-[#00A4EF] cursor-pointer">Events/Hackathons</p>
                              <p onClick={scrollToCommunity} className="hover:text-[#00A4EF] cursor-pointer">Community</p>
                        </div>
                </div>
                <div className="flex flex-col items-center  justfiy-center gap-[35px] text-[#5A5A5A] pt-[40px]">
                  <p className="text-[25px]">Hackathons</p>
                  <div className="cursor-pointer flex flex-col items-center justify-center gap-[15px]">
                      <p className="hover:text-[#00A4EF]">Ms Hack</p>
                      <p className="hover:text-[#00A4EF]">Vistara Hackathon</p>
                      <p className="hover:text-[#00A4EF]">Ideathon</p>
                      <p className="hover:text-[#00A4EF]">Microsoft Code for</p>
                      <p className="hover:text-[#00A4EF]">India Innovation</p>
                      <p className="hover:text-[#00A4EF]">Green Charcoal</p>
                  </div>
                </div>
                <div className="flex flex-col items-center  justfiy-center gap-[35px] text-[#5A5A5A] pt-[40px]">
                      <p className="text-[25px]">Follow Us:</p>
                      <div  className="flex cursor-pointer flex-row justfiy-center items-center gap-[10px]">
                          <img src="/twitter.svg"/>
                          <img src="/link.svg"/>
                          <img src="/fb.svg"/>
                          <img src="/yt.svg"/>
                      </div>
                      <div className="bg-[#FED02F] rounded-[7px] cursor-pointer hover:bg-white hover:border-black hover:border-2 hover:shadow-sm shadow-black">
                        <p className="p-[10px] text-black text-[20px]">Join our Discord</p>
                      </div>
                </div>
          </div>
          <div className="text-[#5A5A5A]">
              <p className="text-center">© 2021 Copyright: Hackathon</p>
          </div>
      </div>
    </div>
  );
}
