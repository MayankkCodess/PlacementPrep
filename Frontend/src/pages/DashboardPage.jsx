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
import {Plus} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%]">

        {/* Top Navbar For Dashboard Page */}

        <div className="navbar flex ">
          <img
            className="w-8 h-8"
            src="https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png"
            alt="PlacementPrep Logo"
          />
          <h2>PlacementPrep</h2>
          <Search />
          <Input />

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
        <hr />

        {/* Statistics Cards For Dashboard Page*/}

          <div className="flex justify-between">
            <div className="w-72 rounded-md bg-[#18252C]">
              <p className="text-[#9DB0B9] text-sm">Recent Interviews</p>
              <h1 className="text-[#E5E7EB]" >5</h1>
              <a href="" className="text-[#53A5ED] text-xs">View All</a>
            </div>
            <div className="w-72 rounded-md bg-[#18252C]">
              <p className="text-[#9DB0B9] text-sm" >Upcoming Mock</p>
              <h1 className="text-[#E5E7EB] font-extrabold" >Dec 15,2023</h1>
              <a href=""  className="text-[#53A5ED] text-xs">View Schedule</a>
            </div>
            <div className="w-72 h-32 rounded-md bg-[#18252C] ">
              <p className="text-[#9DB0B9] text-sm">Latest Score</p>
              <h1 className="text-[#E5E7EB]">89%</h1>
              <a href="" className="text-[#53A5ED] text-xs">View Report</a>
            </div>
          </div>

        {/* Interview Filters & Cards For Dashboard Page */}

        <div className="myInterviews">
          {/* Section 1  */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-extrabold text-xl">My Interviews</h2>
              <div className="flex gap-4">
                {/* Filter 1 */}
                <div>
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex text-[#9DB0B9] bg-[#18252C] items-center gap-2 rounded-md"
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
                      className="flex text-[#9DB0B9] bg-[#18252C] items-center gap-2 rounded-md"
                    >
                      Date Range
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
                {/* Filter 3 */}
                <div>
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex text-[#9DB0B9] bg-[#18252C] items-center gap-2 rounded-md"
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
              <Button className="flex justify-evenly px-4 py-4 bg-linear-to-r from-[#DE7478] to-[#8593DE]">
                <Plus/>
                Add Interview
              </Button>
            </div>
          </div>
          {/* Section 2 */}
          <div className="">
            {/* main for cards  */}
            <div>
              <div>
                <img className="w-50 h-34" src="/Fullstack.jpg" alt="Interview Card Image" />
                <h3>Software Engineer Intern</h3>
                <p>Google</p>
                <div>
                  <p>15 Dec 2023</p>
                <p>&#x20B9;12 LPA</p>
                </div>
                <div>
                  <span>On-Campus</span>
                  <span>SDE</span>
                </div>
              </div>
              {/* Card - 2 */}
              <div>
                <img className="w-50 h-34" src="/ProductMan.jpg" alt="Interview Card Image" />
                <h3>Software Engineer Intern</h3>
                <p>Google</p>
                <div>
                  <p>15 Dec 2023</p>
                <p>&#x20B9;12 LPA</p>
                </div>
                <div>
                  <span>On-Campus</span>
                  <span>SDE</span>
                </div>
              </div>
              {/* Card - 3 */}
              <div>
                <img className="w-50 h-34" src="/data analysis.jpg" alt="Interview Card Image" />
                <h3>Software Engineer Intern</h3>
                <p>Google</p>
                <div>
                  <p>15 Dec 2023</p>
                <p>&#x20B9;12 LPA</p>
                </div>
                <div>
                  <span>On-Campus</span>
                  <span>SDE</span>
                </div>
              </div>
              {/* Card - 4 */}
              <div>
                <img className="w-50 h-34" src="/uiux.jpg" alt="Interview Card Image" />
                <h3>Software Engineer Intern</h3>
                <p>Google</p>
                <div>
                  <p>15 Dec 2023</p>
                <p>&#x20B9;12 LPA</p>
                </div>
                <div>
                  <span>On-Campus</span>
                  <span>SDE</span>
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
