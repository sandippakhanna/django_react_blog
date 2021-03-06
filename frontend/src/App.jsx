import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import About from "./containers/About";
import BlogPost from "./containers/BlogPost";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
