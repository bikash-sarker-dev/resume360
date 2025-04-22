import { Route, Routes } from "react-router";

import React from "react";
import TemplateOne from "../components/DefaultTemplates/TemplateOne";
import Userabout from "../components/user/Userabout";
import UserEducation from "../components/user/UserEducation";
import UserExp from "../components/user/UserExp";
import UserLink from "../components/user/UserLink";
import UserProject from "../components/user/UserProject";
import UserSkill from "../components/user/UserSkill";
import DashboardProfile from "../dashboard/DashboardProfile/DashboardProfile";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MainLayout from "../layouts/MainLayout";
import ChatPage from "../pages/AdminDashboardPage/ChatPage";
import DashboardHomePage from "../pages/AdminDashboardPage/DashboardHomePage";
import DashboardUserPage from "../pages/AdminDashboardPage/DashboardUserPage";
import NotificationPage from "../pages/AdminDashboardPage/NotificationPage";
import OrderDetails from "../pages/AdminDashboardPage/OrderDetails";
import OrderListPage from "../pages/AdminDashboardPage/OrderListPage";
import ReviewsPage from "../pages/AdminDashboardPage/ReviewsPage";
import SecurityPage from "../pages/AdminDashboardPage/SecurityPage";
import BlogPage from "../pages/BlogPage";
import CoverLetter from "../pages/CoverLetter";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RegisterPage from "../pages/RegisterPage";
import ResumeGenerate from "../pages/ResumeGenerate";
import TemplatesPage from "../pages/TemplatesPage";
import User from "../pages/User";
import AboutPage from "./../pages/AboutPage";
import FaqPage from "./../pages/FaqPage";
import ForgetPasswordPage from "./../pages/ForgetPasswordPage";

import CoverLetterManager from "../components/cover-letter/cover-letter-manager/CoverLetterManager";
import Resume from "../components/resume/Resume";
import ResumeManager from "../components/resume/resume-manager/ResumeManager";
import CoverLetterGenerate from "../pages/CoverLetterGenerate";
import Generate from "../pages/Generate";
import { Pricing } from "../pages/Pricing";
import SocialMiddlewarePage from "../pages/SocialMiddlewarePage";
import { SubscriptionDetail } from "../pages/SubscriptionDetail";
import CoverOne from "./../components/DefaultCoverLetterTemplates/CoverOne";
import ContactPage from "./../pages/ContactPage";
import FeaturesPage from "./../pages/FeaturesPage";
import TermsAndConditionsPage from "./../pages/TermsAndConditionsPage";
import GiveReview from "./../pages/UserDashboardPage/GiveReview";

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
        <Route path="subscribe/:id" element={<SubscriptionDetail />} />
        <Route path="/pricing" element={<Pricing></Pricing>} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/socialMiddleware" element={<SocialMiddlewarePage />} />
        <Route path="/coverOne" element={<CoverOne />} />
        <Route path="/contact" element={<ContactPage />} />

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/resume" element={<ResumeGenerate />} />
        <Route path="/create-resume" element={<Resume />} />
        <Route path="/resume-manager" element={<ResumeManager />} />
        <Route path="/templateOne" element={<TemplateOne />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route
          path="/generate-cover-letter"
          element={<CoverLetterGenerate />}
        />
        <Route path="/cover-letter-manager" element={<CoverLetterManager />} />
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
        <Route path="/dashboard/giveReview" element={<GiveReview />} />
      </Route>
      {/* dashboard route working end  */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRoute;
