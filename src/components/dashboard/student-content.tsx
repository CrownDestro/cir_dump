"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function StudentContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const progressData = {
    percentage: 56,
    segments: [
      { name: "Converted", color: "bg-green-500", percentage: 30 },
      { name: "Unassigned", color: "bg-yellow-400", percentage: 26 },
      { name: "Assigned", color: "bg-blue-400", percentage: 24 },
      { name: "Dropped", color: "bg-red-500", percentage: 20 },
    ]
  };

  const upcomingTasks = [
    { title: "Code hour", date: "24 Sep 2019, Friday", color: "bg-pink-100" },
    { title: "Aptitude test", date: "05 Oct 2019, Monday", color: "bg-blue-100" },
    { title: "Eng - Vocabulary", date: "05 Oct 2019, Monday", color: "bg-green-100" },
    { title: "Eng - Vocabulary test", date: "05 Oct 2019, Monday", color: "bg-gray-100 text-gray-400 line-through" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-4">
      {/* Center Section (spans 2 columns) */}
      <div className="space-y-10 lg:col-span-2">
        <Card className="bg-[#e1e1e1]">
          <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700">Step Up Your Career Game!</h2>
              <p className="mt-2 max-w-md text-sm text-gray-800">
                Develop essential career skills and achieve your goals with structured learning—guided by expert mentors to help you grow
              </p>
            </div>
            <img src="/images/hero-career.svg" alt="Career" className="w-40 md:w-48" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">My progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="relative h-28 w-28">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="110.5"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-xl font-bold fill-current">
                      56%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {progressData.segments.map((segment) => (
                  <div key={segment.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`h-3 w-3 rounded-full ${segment.color}`} />
                      <span className="ml-2 text-sm">{segment.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full flex items-end justify-between">
                {[1/3, 1/2, 2/3, 3/5, 3/4, 4/5].map((height, idx) => (
                  <div key={idx} className="w-8 rounded-t bg-green-500" style={{ height: `${height * 200}px` }}></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img src="/images/mentor.png" className="h-12 w-12 rounded-full bg-gray-200" alt="Mentor" />
              <div>
                <h3 className="font-medium">Mentor Name</h3>
                <p className="text-sm text-gray-500">Mentor Role</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel */}
      <div className="space-y-10">
        <Card className="w-full max-w-xs self-start">
          <CardContent className="p-4 pt-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>

        <Card className="w-full max-w-xs self-start">
          <CardHeader>
            <CardTitle>Upcoming tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, i) => (
                <div key={i} className={`rounded-md p-3 ${task.color}`}>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
