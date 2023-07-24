import React, { FC } from "react";

const End: FC = () => {
  return (
    <div
    style={{ height: '45vh', background: 'black'}}
    className="flex flex-col justify-between items-center">
      <div className="flex justify-between items-center py-10 w-full">
        <div className="mx-auto">
          <p className="text-[grey] py-2">Who we are</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">About</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">Jobs</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">For Others</p>
        </div>
        <div className="mx-auto">
          <p className="text-[grey] py-2">COMMUNITIES</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">Developers</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">Investors</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">For Artists</p>
        </div>
        <div className="mx-auto">
          <p className="text-[grey] py-2">USEFUL LINKS</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">Instagram</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">VK</p>
          <p className="text-white hover:text-[#e3eb75] cursor-pointer py-2">Twitter</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-screen-lg">
          <div
           style={{ marginBottom: '40px'}}
           className="flex justify-center gap-5 items-center text-sm">
            <p className="text-[grey] cursor-pointer hover:text-white ml-8">Legal</p>
            <p className="text-[grey] cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="text-[grey] cursor-pointer hover:text-white">About Ads</p>
            <p className="text-[grey] cursor-pointer hover:text-white">Access</p>
            <p className="text-[grey] cursor-pointer hover:text-white">Mobile</p>
            <div className="h-6 border-r border-[grey]"></div>
            <p className="text-[grey] hidden md:block cursor-pointer hover:text-white">International</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
