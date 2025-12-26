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
            <h2 className="text-xl text-[#E5E7EB] font-semibold">
              PlacementPrep
            </h2>
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
                <Button variant="ghost" size="icon" className="relative w-11 h-11 bg-[#18252C] hover:bg-[#18252C] hover:opacity-55 hover:text-[white]">
                  <Bell className="h-6 w-6 hover:text-[white]" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-64 bg-[#18252C]">
                <DropdownMenuItem>No new notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile DropDown  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer size-11">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback className="text-[#18252C]">MK</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#18252C] border-none" align="end">
                <DropdownMenuItem className="text-[#9DB0B9]">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-[#9DB0B9]">Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-[#53A5ED]">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <hr className="mt-4 mb-6 border-[#283339]" />

        {/* Statistics Cards For Dashboard Page*/}

        <div className="flex justify-between">
          {/* Card 1 */}
          <div className="w-[318px] h-[156px] rounded-xl bg-[#18252C] p-6">
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
          <div className="w-[318px] h-[156px] rounded-xl bg-[#18252C] p-6">
            <div className="">
              <h1 className="text-[#9DB0B9] text-lg font-medium">
                Upcoming Mock
              </h1>
              <p className="text-[#E5E7EB] text-2xl font-semibold mt-2">
                Dec 15, 2023
              </p>
              <div className="mt-4">
                <a href="" className="text-[#53A5ED] text-sm">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
          {/* Card - 3 */}
          <div className="w-[318px] h-[156px] rounded-xl bg-[#18252C] p-6">
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

        <div className="myInterviews mt-10 mb-30">
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

          {/* Section 2 Interview Cards */}

          <div className="">
            {/* main for cards  */}
            <div className="flex justify-between">
              <div className="w-[236px] h-[294px] rounded-xl p-4.5 bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-28 rounded-xl"
                    src="/Fullstack.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB] text-lg mt-3">
                    Software Engineer Intern
                  </h3>
                  <p className="text-[#9DB0B9] text-md">Google</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9] text-md">15 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;12 LPA</p>
                  </div>
                  <div className="flex mt-0.5 gap-4">
                    <span className="p-1.5 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED]">
                      On-Campus
                    </span>
                    <span className="text-sm bg-[#1B3E52] rounded-full p-1.5 text-[#53A5ED]">
                      SDE
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 2 */}
              <div className="w-[236px] h-[294px] rounded-xl p-4.5 bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-28 rounded-xl"
                    src="/ProductMan.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB] text-lg mt-3">
                    Product Manager
                  </h3>
                  <p className="text-[#9DB0B9] text-md">Microsoft</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9] text-md">18 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;33 LPA</p>
                  </div>
                  <div className="flex mt-0.5 gap-4">
                    <span className="p-1.5 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED]">
                      Applied
                    </span>
                    <span className="text-sm bg-[#1B3E52] rounded-full p-1.5 text-[#53A5ED]">
                      OA
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 3 */}
              <div className="w-[236px] h-[294px] rounded-xl p-4.5 bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-28 rounded-xl"
                    src="/data analysis.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB] text-lg mt-3">
                    Data Analyst
                  </h3>
                  <p className="text-[#9DB0B9] text-md">Amazon</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9] text-md">20 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;9 LPA</p>
                  </div>
                  <div className="flex mt-0.5 gap-4">
                    <span className="p-1.5 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED]">
                      Technical Round
                    </span>
                    <span className="text-sm bg-[#1B3E52] rounded-full p-1.5 text-[#53A5ED]">
                      Analyst
                    </span>
                  </div>
                </div>
              </div>
              {/* Card - 4 */}
              <div className="w-[236px] h-[294px] rounded-xl p-4.5 bg-[#18252C]">
                <div>
                  <img
                    className="w-50 h-28 rounded-xl"
                    src="/uiux.jpg"
                    alt="Interview Card Image"
                  />
                  <h3 className="text-[#E5E7EB] text-lg mt-3">
                    UX Designer
                  </h3>
                  <p className="text-[#9DB0B9] text-md">Figma</p>
                  <div className="flex gap-4">
                    <p className="text-[#9DB0B9] text-md">22 Dec 2023</p>
                    <p className="text-[#9DB0B9]">&#x20B9;11 LPA</p>
                  </div>
                  <div className="flex mt-0.5 gap-4">
                    <span className="p-1.5 text-sm bg-[#1B3E52] rounded-full text-[#53A5ED]">
                      Off-Campus
                    </span>
                    <span className="text-sm bg-[#1B3E52] rounded-full p-1.5 text-[#53A5ED]">
                      Design
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
