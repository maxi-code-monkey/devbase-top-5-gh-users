import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import List from './List';
import UserDetail from './Detail'
import CustomAppBar from "../components/AppBar";

const Router = () => {
  return (
    <BrowserRouter>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:userName" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
   )
};

export default Router;