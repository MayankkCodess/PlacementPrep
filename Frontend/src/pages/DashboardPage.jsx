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

        <div className="stats">
          <div className="flex justify-between">
            <div className="p-4 rounded-md bg-[#18252C]">
              <p className="">Recent Interviews</p>
              <h3>5</h3>
              <a href="">View All</a>
            </div>
            <div className="p-4 rounded-md bg-[#18252C]">
              <p>Upcoming Mock</p>
              <h3>Dec 15,2023</h3>
              <a href="">View Schedule</a>
            </div>
            <div className="p-4 rounded-md bg-[#18252C]">
              <p>Latest Score</p>
              <h3>89%</h3>
              <a href="">View Report</a>
            </div>
          </div>
        </div>

        {/* Interview Filters & Cards For Dashboard Page */}

        <div className="myInterviews">
          {/* Section 1  */}
          <div className="">
            <div>
              <h2>My Interviews</h2>
              <div>
                {/* Filter 1 */}
                <div>
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-2 rounded-full"
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
                      className="flex items-center gap-2 rounded-full"
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
                      className="flex items-center gap-2 rounded-full"
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
              <Button>
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
                <img src="" alt="Interview Card Image" />
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
                <img src="" alt="Interview Card Image" />
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
                <img src="" alt="Interview Card Image" />
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
                <img src="" alt="Interview Card Image" />
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
