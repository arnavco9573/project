import React from "react";
import michael_kiger from "../images/michael_kiger.jpg";
import people03 from "../images/people03.jpg";
import christopher from "../images/christopher.jpg";
import kristian from "../images/kristian.jpg";
import people02 from "../images/people02.jpg";
import people06 from "../images/people06.jpg";


const Testimonials = () => {
  return (
    <section className="flex justify-center items-center px-4 md:px-6 py-8 bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-8">
  <div className="flex justify-center items-center max-w-[1280px] w-full flex-col">
    <h2 className="font-bold text-3xl md:text-5xl leading-[32px] md:leading-[40px] text-center">
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
        Global Students
      </span>{" "}
      Say It Best
    </h2>
    <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {/* 1st Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={michael_kiger} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Michael Kiger</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Web Developer</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">Adrian is the best instructor I have listened to. Watched several hundred tutorials past two years. Many instructors waste lots of time with personal comments during tutorials. Adrian gets right to the point, moving quickly through code examples. I needed to master Javascript and will use JS Mastery exclusively during my career.</p>
      </div>
      
      {/* 2nd Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={people03} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Robert Gregg</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Software Developer | England</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">Adrian has helped me several times on my Javascript and React journey and has shown his crystal clear understanding of these topics. I was able to discuss ideas, and he was able to point me in the right direction as well as help me with some key issues I was struggling with, ultimately leading to getting a job as a software developer.</p>
      </div>
      
      {/* 3rd Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={christopher}alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Christopher Ang</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Web Developer</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">Adrian and this team are always there to help and guide you. Being a part of and surrounded by like-minded people who aspire to become great developers is something you don’t find often. I feel very fortunate to be a part of this program.</p>
      </div>
      
      {/* 4th Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={kristian} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Kristian Fulkerson</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">Simply the best way to take your development skills to the next level. Adrian from JS Mastery already has the best free content out on the internet, but since joining the master class, my confidence in writing more complicated application features has skyrocketed. I cannot thank Adrian enough. I am now working as a software engineer while participating in the program, and the team environment he creates simulates what you will experience once you get a job. 10/10</p>
      </div>
      
      {/* 5th Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={people02} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Akshay Mishra</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Associate Software Developer | India</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">Adrian, I wanted to thank you for your React courses. I've personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago. Keep doing what you're doing. Thank you!</p>
      </div>
      
      {/* 6th Testimonial */}
      <div className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <div className="w-full flex-1 flex flex-row">
            <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
              <span>
                <img src={people06} alt="" />
              </span>
            </div>
            <div className="flex flex-col justify-center ml-2 mt-0">
              <p className="font-semibold text-lg leading-[26px]">Oscar Hampton</p>
              <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">Freelance Software Developer | USA</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">JS Mastery has been precisely what I was looking for. I have enjoyed the courses, and completing them filled many gaps that some other learning platforms brushed over or skipped entirely. 10/10 would recommend.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Testimonials;
