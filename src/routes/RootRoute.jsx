import { Route, Routes } from "react-router";

import React from "react";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import RegisterPage from "../pages/RegisterPage";
import TemplatePage from "../pages/TemplatePage";
import User from "../pages/User";
import AboutPage from "./../pages/AboutPage";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/personal-info" element={<PersonalInfoPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayouts />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRoute;
