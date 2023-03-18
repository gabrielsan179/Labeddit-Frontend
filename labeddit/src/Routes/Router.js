import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import PostsPage from "../Pages/PostsPage/PostsPage";
import SignupPage from "../Pages/SignupPage/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/comments/:id" element={<CommentsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
