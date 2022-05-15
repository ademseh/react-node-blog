import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Sidebar from "./components/Sidebar";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
