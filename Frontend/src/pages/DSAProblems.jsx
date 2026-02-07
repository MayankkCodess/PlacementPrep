// Make this Page Optimize like 1. Responsiveness 2. Semantic Tags 3. Make Code Optimize(too lines) 4. UI Tune


import React, { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Plus, Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// YouTube Icon Component
const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// LeetCode Icon Component
const LeetCodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// Progress Bar Component
const ProgressBar = ({ current, total, variant = "orange" }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="flex items-center gap-3">
      <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-300 ${
            variant === "orange" ? "bg-primary" : "bg-secondary"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-muted-foreground font-medium">
        {current} / {total}
      </span>
    </div>
  );
};

// Difficulty Badge Component
const DifficultyBadge = ({ level }) => {
  const styles = {
    Easy: "bg-easy/20 text-easy border-easy/30",
    Medium: "bg-medium/20 text-medium border-medium/30",
    Hard: "bg-hard/20 text-hard border-hard/30",
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded border ${styles[level]}`}>
      {level}
    </span>
  );
};

// Plus Badge Component
const PlusBadge = () => (
  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary text-primary-foreground">
    Plus
  </span>
);

// Problem Row Component
const ProblemRow = ({ problem, onToggle }) => {
  return (
    <tr className="border-b border-border hover:bg-table-row-hover transition-colors">
      <td className="py-4 px-4 w-16">
        <Checkbox 
          checked={problem.completed}
          onCheckedChange={() => onToggle(problem.id)}
          className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
      </td>
      <td className="py-4 px-4">
        <span className="text-foreground font-medium">{problem.name}</span>
      </td>
      <td className="py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <a href={problem.solveLink} className="text-primary hover:underline text-sm font-medium">
            Solve
          </a>
          <YoutubeIcon className="w-5 h-5 text-youtube" />
        </div>
      </td>
      <td className="py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <FileText className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
          <YoutubeIcon className="w-5 h-5 text-youtube cursor-pointer" />
        </div>
      </td>
      <td className="py-4 px-4 text-center">
        {problem.practice ? (
          <LeetCodeIcon className="w-5 h-5 text-medium mx-auto" />
        ) : (
          <span className="text-muted-foreground">---</span>
        )}
      </td>
      <td className="py-4 px-4 text-center">
        <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </td>
      <td className="py-4 px-4 text-center">
        <button className="text-muted-foreground hover:text-medium transition-colors">
          <Star className="w-5 h-5" />
        </button>
      </td>
      <td className="py-4 px-4 text-center">
        <DifficultyBadge level={problem.difficulty} />
      </td>
    </tr>
  );
};

// Subtopic Section Component
const SubtopicSection = ({ subtopic, problems, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const completed = problems.filter(p => p.completed).length;

  return (
    <div className="bg-card-dark rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          )}
          <span className="text-foreground font-medium">{subtopic}</span>
        </div>
        <ProgressBar current={completed} total={problems.length} variant="teal" />
      </button>

      {isOpen && (
        <div className="px-4 pb-4">
          <table className="w-full">
            <thead>
              <tr className="bg-table-header text-muted-foreground text-sm">
                <th className="py-3 px-4 text-left font-medium w-16">Status</th>
                <th className="py-3 px-4 text-left font-medium">Problem</th>
                <th className="py-3 px-4 text-center font-medium">
                  <div className="flex items-center justify-center gap-1">
                    Resource <PlusBadge />
                  </div>
                </th>
                <th className="py-3 px-4 text-center font-medium">Resource</th>
                <th className="py-3 px-4 text-center font-medium">Practice</th>
                <th className="py-3 px-4 text-center font-medium">Note</th>
                <th className="py-3 px-4 text-center font-medium">Revision</th>
                <th className="py-3 px-4 text-center font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <ProblemRow key={problem.id} problem={problem} onToggle={onToggle} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Main Topic Section Component
const TopicSection = ({ topic, subtopics, allProblems, onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const totalProblems = Object.values(subtopics).flat().length;
  const completedProblems = Object.values(subtopics).flat().filter(id => 
    allProblems.find(p => p.id === id)?.completed
  ).length;

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          )}
          <span className="text-foreground font-semibold text-lg">{topic}</span>
        </div>
        <ProgressBar current={completedProblems} total={totalProblems} variant="orange" />
      </button>

      {isOpen && (
        <div className="space-y-2 ml-2">
          {Object.entries(subtopics).map(([subtopic, problemIds]) => (
            <SubtopicSection
              key={subtopic}
              subtopic={subtopic}
              problems={problemIds.map(id => allProblems.find(p => p.id === id))}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
const DSAProblems = () => {
  const [problems, setProblems] = useState([
    { id: 1, name: "Binary Search to find X in sorted array", completed: true, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 2, name: "Implement Lower Bound", completed: false, solveLink: "#", practice: false, difficulty: "Easy" },
    { id: 3, name: "Implement Upper Bound", completed: false, solveLink: "#", practice: false, difficulty: "Easy" },
    { id: 4, name: "Search Insert Position", completed: false, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 5, name: "Floor/Ceil in Sorted Array", completed: false, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 6, name: "First and Last Position", completed: true, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 7, name: "Count Occurrences in Sorted Array", completed: false, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 8, name: "Search in Rotated Sorted Array", completed: true, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 9, name: "Search in Rotated Sorted Array II", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 10, name: "Find Minimum in Rotated Sorted Array", completed: true, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 11, name: "Find out how many times array is rotated", completed: false, solveLink: "#", practice: false, difficulty: "Easy" },
    { id: 12, name: "Single Element in Sorted Array", completed: true, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 13, name: "Find Peak Element", completed: true, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 14, name: "Find square root of a number in log n", completed: true, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 15, name: "Find Nth Root of a Number", completed: true, solveLink: "#", practice: false, difficulty: "Medium" },
    { id: 16, name: "Koko Eating Bananas", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 17, name: "Minimum days to make M bouquets", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 18, name: "Find the smallest Divisor", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 19, name: "Capacity to Ship Packages within D Days", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 20, name: "Kth Missing Positive Number", completed: false, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 21, name: "Aggressive Cows", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 22, name: "Book Allocation Problem", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 23, name: "Split Array - Largest Sum", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 24, name: "Painter's Partition", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 25, name: "Minimize Max Distance to Gas Station", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 26, name: "Median of 2 sorted arrays", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 27, name: "Kth element of 2 sorted arrays", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 28, name: "Row with maximum 1s", completed: false, solveLink: "#", practice: true, difficulty: "Easy" },
    { id: 29, name: "Search in a 2D Matrix", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 30, name: "Search in a row and column wise sorted matrix", completed: false, solveLink: "#", practice: true, difficulty: "Medium" },
    { id: 31, name: "Find Peak Element in 2D Matrix", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
    { id: 32, name: "Matrix Median", completed: false, solveLink: "#", practice: true, difficulty: "Hard" },
  ]);

  const topics = {
    "Binary Search [1D, 2D Arrays, Search Space]": {
      "BS on 1D Arrays": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      "BS on Answers": [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      "BS on 2D Arrays": [28, 29, 30, 31, 32],
    },
  };

  const toggleProblem = (id) => {
    setProblems(prev =>
      prev.map(p => (p.id === id ? { ...p, completed: !p.completed } : p))
    );
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-8">
          DSA Problem Tracker
        </h1>
        
        <div className="space-y-4">
          {Object.entries(topics).map(([topic, subtopics]) => (
            <TopicSection
              key={topic}
              topic={topic}
              subtopics={subtopics}
              allProblems={problems}
              onToggle={toggleProblem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSAProblems;
