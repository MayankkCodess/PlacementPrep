import React from "react";
import { Input } from "@/components/ui/input.jsx";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { ChevronDown } from "lucide-react";
import { Plus } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="w-full mt-8 flex justify-center ">
      <div className="w-[1054px]">
        {/* Top Navbar For Dashboard Page */}

        <div className="navbar flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="w-8 h-8"
              src="https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png"
              alt="PlacementPrep Logo"
            />
            <h2 className="text-xl text-[#E5E7EB] font-semibold">PlacementPrep</h2>
          </div>

          <div className="relative ">
            <Search className="absolute text-[#9DB0B9] left-3 top-1/5" />
            <Input
              className=" w-[482px] h-[43px] placeholder:text-[#9DB0B9] placeholder:text-lg border-[#283339] pl-10 bg-[#18252C]"
              placeholder="Search companies, roles..."
            />
          </div>

          <div className="flex items-center gap-2">
            {/* DropDown For Notification Icon */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuItem>No new notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile DropDown  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback className="text-black">MK</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <hr className="mt-4 mb-6 border-[#283339]"/>

        {/* Statistics Cards For Dashboard Page*/}

        <div className="flex justify-between">
           {/* Card 1 */}
          <div className="w-[318px] h-[156px] rounded-md bg-[#18252C] p-6">
            <div className="">
              <h1 className="text-[#9DB0B9] text-lg font-medium">
                Recent Interviews
              </h1>
              <p className="text-[#E5E7EB] text-2xl font-semibold mt-2">5</p>
              <div className="mt-4">
                  <a href="" className="text-[#53A5ED] text-sm">
                  View All
                </a>
              </div>
                
            </div>
          </div>
            {/* Card 2 */}
         <div className="w-[318px] h-[156px] rounded-md bg-[#18252C] p-6">
            <div className="">
              <h1 className="text-[#9DB0B9] text-lg font-medium">
                Upcoming Mock
              </h1>
              <p className="text-[#E5E7EB] text-2xl font-semibold mt-2">Dec 15, 2023</p>
              <div className="mt-4">
                  <a href="" className="text-[#53A5ED] text-sm">
                  View Schedule
                </a>
              </div>
                
            </div>
          </div>
             {/* Card - 3 */}
         <div className="w-[318px] h-[156px] rounded-md bg-[#18252C] p-6">
            <div className="">
              <h1 className="text-[#9DB0B9] text-lg font-medium">
                Latest Score
              </h1>
              <p className="text-[#E5E7EB] text-2xl font-semibold mt-2">89%</p>
              <div className="mt-4">
                  <a href="" className="text-[#53A5ED] text-sm">
                  View Report
                </a>
              </div>
                
            </div>
          </div>
        </div>

        {/* Interview Filters & Cards For Dashboard Page */}

        <div className="myInterviews mt-10">
          {/* Section 1  */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl">My Interviews</h2>
              <div className="flex gap-4">
                {/* Filter 1 */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex text-[#9DB0B9] text-md bg-[#18252C] items-center gap-2 rounded-md"
                      >
                        Role
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Software Engineer</DropdownMenuItem>
                      <DropdownMenuItem>Product Manager</DropdownMenuItem>
                      <DropdownMenuItem>Data Analyst</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Filter 2 */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex text-[#9DB0B9] text-md bg-[#18252C] items-center gap-2 rounded-md"
                      >
                        Date Range
                        <ChevronDown className="h-4 w-4 " />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Software Engineer</DropdownMenuItem>
                      <DropdownMenuItem>Product Manager</DropdownMenuItem>
                      <DropdownMenuItem>Data Analyst</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* Filter 3 */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex text-[#9DB0B9] text-md bg-[#18252C] items-center gap-2 rounded-md"
                      >
                        Package
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Software Engineer</DropdownMenuItem>
                      <DropdownMenuItem>Product Manager</DropdownMenuItem>
                      <DropdownMenuItem>Data Analyst</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </div>

            </div>

            <div>
              <Button className="flex justify-evenly text-md w-44 h-[46px] px-4 py-4 bg-linear-to-r from-[#DE7478] to-[#8593DE]">
                <Plus />
                Add Interview
              </Button>
            </div>

          </div>


          {/* Section 2 */}
          <div className="">
            {/* main for cards  */}
            <div className="flex justify-between">
              <div className="w-[236px] h-[294px] rounded-lg flex justify-center items-center bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-34"
                    src="/Fullstack.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB]">Software Engineer Intern</h3>
                  <p className="text-[#9DB0B9] text-sm">Google</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9]">15 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;12 LPA</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="border-black p-4 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      On-Campus
                    </span>
                    <span className="border-black text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      SDE
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 2 */}
              <div className="w-[236px] h-[294px] rounded-lg flex justify-center items-center bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-34"
                    src="/Fullstack.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB]">Software Engineer Intern</h3>
                  <p className="text-[#9DB0B9] text-sm">Google</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9]">15 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;12 LPA</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="border-black p-4 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      On-Campus
                    </span>
                    <span className="border-black text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      SDE
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 3 */}
              <div className="w-[236px] h-[294px] rounded-lg flex justify-center items-center bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-34"
                    src="/Fullstack.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB]">Software Engineer Intern</h3>
                  <p className="text-[#9DB0B9] text-sm">Google</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9]">15 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;12 LPA</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="border-black p-4 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      On-Campus
                    </span>
                    <span className="border-black text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      SDE
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 4 */}
              <div className="w-[236px] h-[294px] rounded-lg flex justify-center items-center bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-34"
                    src="/Fullstack.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB]">Software Engineer Intern</h3>
                  <p className="text-[#9DB0B9] text-sm">Google</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9]">15 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;12 LPA</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="border-black p-4 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      On-Campus
                    </span>
                    <span className="border-black text-sm bg-[#1B3E52] rounded-full text-[#53A5ED] justify-center items">
                      SDE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
