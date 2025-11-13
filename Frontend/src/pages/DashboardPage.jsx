import React from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-[70%] mx-auto">
        <div className="NavDash">
          <nav className="h-20 text-white flex items-center justify-between px-6 shadow-md">

            <div className="flex items-center gap-3">
              <img
                src="https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png"
                alt="logo"
                className="w-8 h-8"
              />
              <h1 className="text-[#E5E7EB] text-xl font-semibold">PrepSaaS</h1>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative ">
                <Search className="absolute left-3 " />
                <input
                  type="text"
                  placeholder="Search companies, roles..."
                  className="w-[40%] pl-10 min-w-[200px] max-w-[400px] px-4 py-2 rounded-md bg-gray-800 text-white outline-none border border-gray-600"
                />
              </div>
            </div>

            {/* PROFILE ICON */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                <img src="/profile.png" className="w-6 h-6" alt="profile" />
              </div>
            </div>
            
          </nav>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
