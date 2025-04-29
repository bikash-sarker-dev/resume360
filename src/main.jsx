import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import RootRoute from "./routes/RootRoute.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ResumeProvider from "./contextApi/resume-context/ResumeContext.jsx";
import CoverLetterProvider from "./contextApi/coverletter-context/CoverLetterContext.jsx";
import { FormDataProvider } from "./components/CustomTemplate/FormDataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ResumeProvider>
       <FormDataProvider>
       <CoverLetterProvider>
          <BrowserRouter>
            <RootRoute />
          </BrowserRouter>
        </CoverLetterProvider>
       </FormDataProvider>
      </ResumeProvider>
    </AuthProvider>
  </StrictMode>
);
