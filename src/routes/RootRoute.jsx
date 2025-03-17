import { Route, Routes } from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TemplatesPage from "../pages/TemplatesPage";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/templates" element={<TemplatesPage></TemplatesPage>} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
