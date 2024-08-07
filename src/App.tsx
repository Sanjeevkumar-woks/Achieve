import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Class from "./Components/Class";
import Tasks from "./Components/Tasks";
import Projects from "./Components/Projects";
import Queries from "./Components/Queries";

function App() {
  return (
    <Router>
      <div className="App flex z-10 ">
        <Sidebar />
        <div className="flex-1 ml-16  z-0 absolute">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class" element={<Class />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/queries" element={<Queries />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
