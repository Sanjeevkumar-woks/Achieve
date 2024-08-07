import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import ClassComponent from "./Components/Class";
import Tasks from "./Components/Tasks";
import Projects from "./Components/Projects";
import Queries from "./Components/Queries";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <div className="absolute z-20">
          <Sidebar />
        </div>
        <div className="flex-1 ml-16 p-4 relative z-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class" element={<ClassComponent />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/queries" element={<Queries />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
