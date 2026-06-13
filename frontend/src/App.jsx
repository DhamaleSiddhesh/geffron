import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="bg-[#e7e7e9]">
        <Layout>
          <div className="min-h-screen ">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/About" element={<About />} /> */}
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
