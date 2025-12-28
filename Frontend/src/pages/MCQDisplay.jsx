// import React from 'react'

// const MCQDisplay = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MCQDisplay

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
]

export default function MCQDisplay() {
  const today = new Date()

  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(today)

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()

  const isSelected = (day) =>
    day === selectedDate.getDate() &&
    currentMonth === selectedDate.getMonth() &&
    currentYear === selectedDate.getFullYear()

  return (
    <Card className="w-80 bg-black border-zinc-800 p-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={prevMonth}>◀</Button>

        <h2 className="font-semibold">
          {MONTHS[currentMonth]} {currentYear}
        </h2>

        <Button variant="ghost" onClick={nextMonth}>▶</Button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 text-center text-xs text-zinc-400 mb-2">
        {DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={i} />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1

          return (
            <button
              key={day}
              onClick={() =>
                setSelectedDate(new Date(currentYear, currentMonth, day))
              }
              className={`
                h-9 w-9 rounded-md border text-sm
                flex items-center justify-center
                transition
                ${
                  isSelected(day)
                    ? "bg-cyan-600 border-cyan-500 text-white"
                    : isToday(day)
                    ? "bg-emerald-600 border-emerald-500 text-white"
                    : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                }
              `}
            >
              {day}
            </button>
          )
        })}
      </div>
    </Card>
  )
}
