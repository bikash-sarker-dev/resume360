import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import RootRoute from "./routes/RootRoute.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ResumeProvider from "./contextApi/resume-context/ResumeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ResumeProvider>
        <BrowserRouter>
          <RootRoute />
        </BrowserRouter>
      </ResumeProvider>
    </AuthProvider>
  </StrictMode>
);
