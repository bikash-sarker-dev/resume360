import { Route, Routes } from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRoute;
