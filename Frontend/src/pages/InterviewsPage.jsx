import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  FileText,
  User,
  Settings,
  LogOut,
  UserCheck,
  Calendar,
} from "lucide-react";

function InterviewsPage() {
  return (
    <div className="w-full min-h-screen flex">
      <aside className="w-[276px] bg-[#111618]">
        <nav className="my-6 mx-6">
          <div className="flex gap-2">
            <Avatar className="cursor-pointer size-11">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback className="text-[#18252C]">MK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <h2>Alex Johnson</h2>
              <p className="text-[#9DB0B9]">alex.j@email.com</p>
            </div>
          </div>

          <div className="flex flex-col mt-6">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <Home className="w-5 h-5" /> DashBoard
              </NavLink>
              <NavLink
                to="/interviews"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <Calendar className="w-5 h-5" /> Interviews
              </NavLink>
              <NavLink
                to="/practice"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <BookOpen className="w-5 h-5" /> Practice
              </NavLink>
              <NavLink
                to="/mynotes"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <FileText className="w-5 h-5" /> MyNotes
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <User className="w-5 h-5" /> Profile
              </NavLink>

            <div className="flex flex-col">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#283339]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <Settings className="w-5 h-5" /> Settings
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center gap-3 pl-2 pr-6 py-2 rounded-md transition ${
                    isActive ? "bg-[#1c5575]" : "hover:bg-[#283339]"
                  }`
                }
              >
                <LogOut className="w-5 h-5" /> LogOut
              </NavLink>
            </div>

          </div>

        </nav>
      </aside>

      <main className="flex-1 "></main>
    </div>
  );
}

export default InterviewsPage;
