import { Route, Routes } from "react-router";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import RegisterPage from "../pages/RegisterPage";
import TemplatePage from "../pages/TemplatePage";
import User from "../pages/User";
import AboutPage from "./../pages/AboutPage";
import Userabout from "../components/user/Userabout";
import UserEducation from "../components/user/UserEducation";
import UserSkill from "../components/user/UserSkill";
import UserExp from "../components/user/UserExp";
import UserProject from "../components/user/UserProject";
import UserLink from "../components/user/UserLink";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<User />} >
          <Route index element={<Userabout />} /> {/* Default: /user */}
          <Route path="usereducation" element={<UserEducation />} /> {/* /user/education */}
          <Route path="userskill" element={<UserSkill />} /> {/* /user/skill */}
          <Route path="userexp" element={<UserExp />} /> {/* /user/exp */}
          <Route path="userproject" element={<UserProject />} /> {/* /user/project */}
          <Route path="userlink" element={<UserLink />} /> {/* /user/link */}
        </Route>
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/personal-info" element={<PersonalInfoPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRoute;
