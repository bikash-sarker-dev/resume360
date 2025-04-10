import { Route, Routes } from "react-router";

import React from "react";
import TemplateOne from "../components/DefaultTemplates/TemplateOne";
import Userabout from "../components/user/Userabout";
import UserEducation from "../components/user/UserEducation";
import UserExp from "../components/user/UserExp";
import UserLink from "../components/user/UserLink";
import UserProject from "../components/user/UserProject";
import UserSkill from "../components/user/UserSkill";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MainLayout from "../layouts/MainLayout";
import AddInformation from "../pages/AddInformation";
import BlogPage from "../pages/BlogPage";
import ChatPage from "../pages/DashboardPage/ChatPage";
import DashboardHomePage from "../pages/DashboardPage/DashboardHomePage";
import DashboardUserPage from "../pages/DashboardPage/DashboardUserPage";
import NotificationPage from "../pages/DashboardPage/NotificationPage";
import OrderDetails from "../pages/DashboardPage/OrderDetails";
import OrderListPage from "../pages/DashboardPage/OrderListPage";
import ReviewsPage from "../pages/DashboardPage/ReviewsPage";
import SecurityPage from "../pages/DashboardPage/SecurityPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import RegisterPage from "../pages/RegisterPage";
import TemplatesPage from "../pages/TemplatesPage";
import User from "../pages/User";
import AboutPage from "./../pages/AboutPage";
import FaqPage from "./../pages/FaqPage";
import ForgetPasswordPage from "./../pages/ForgetPasswordPage";
import DashboardProfile from "../dashboard/DashboardProfile/DashboardProfile";

import { SubscriptionDetail } from "../pages/SubscriptionDetail";
import { Pricing } from "../pages/Pricing";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="subscribe/:id" element={<SubscriptionDetail/>}/>
        <Route path="/pricing" element={<Pricing></Pricing>} />



        {/* user page routes  */}
        <Route path="/user" element={<User />}>
          <Route index element={<Userabout />} />
          <Route path="usereducation" element={<UserEducation />} />
          <Route path="userskill" element={<UserSkill />} /> 
          <Route path="userexp" element={<UserExp />} /> 
          <Route path="userproject" element={<UserProject />} />
          <Route path="userlink" element={<UserLink />} /> 
        </Route>
        <Route path="/templates" element={<TemplatesPage />} />

        <Route path="/personal-info" element={<PersonalInfoPage />} />
        <Route path="/add-information" element={<AddInformation />} />
        <Route path="/templateOne" element={<TemplateOne />} />
        <Route path="/blog" element={<BlogPage />} />
      </Route>
      {/* dashboard route working start  */}
      <Route path="/dashboard" element={<DashboardLayouts />}>
        <Route path="/dashboard/home" element={<DashboardHomePage />} />
        <Route path="/dashboard/users" element={<DashboardUserPage />} />
        <Route path="/dashboard/order-list" element={<OrderListPage />} />
        <Route path="/dashboard/order-details" element={<OrderDetails />} />
        <Route path="/dashboard/reviews" element={<ReviewsPage />} />
        <Route path="/dashboard/security" element={<SecurityPage />} />
        <Route path="/dashboard/notification" element={<NotificationPage />} />
        <Route path="/dashboard/chat" element={<ChatPage />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
      </Route>
      {/* dashboard route working end  */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRoute;
