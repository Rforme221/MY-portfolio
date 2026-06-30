import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch all fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

