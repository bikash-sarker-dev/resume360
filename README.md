# Resume360

##  🔍 Overview 
Resume 360 is a modern web application that allows users to easily build professional resumes and cover letters. Users can input their personal details, work experiences, education, skills, and generate customized resumes in multiple formats and styles. The platform also features an intelligent Cover Letter Generator that creates tailored cover letters based on user input, saving time and ensuring a professional presentation.

## 🚀 Live Site URL :  [Resume360](https://resume360.netlify.app/)

## 🤝 Contributors
- **Sadia Afrin** - Frontend Developer
- **Bikash Sarkar** - Backend Developer
- **Kazi Md. Joynal Abedin** - UI/UX designer
- **Tamjid Ahmed** - Frontend developer
- **MD Adnan Mahmud** - Frontend Developer
- **Fatema Hanif** - Frontend Developer 
## 🎯 Target Sector
- **Job Seekers** – Individuals looking for employment can create professional resumes.
- **Students & Fresh Graduates** – Helps students and new graduates build their first resume.
- **Freelancers & Professionals** – Offers customizable templates for various industries.
- **Recruitment Agencies** – Agencies can help job seekers generate professional resumes.

## 🛠️ Technologies Used 
This project utilizes a modern web development stack, combining frontend and backend tools to deliver a robust and responsive application:
- **React.js** – A JavaScript library for building dynamic and interactive user interfaces.
- **JavaScript(ES6+)** – The primary programming language used throughout the project.
- **Tailwind CSS** – A utility-first CSS framework for building responsive and modern UIs quickly.
- **Firebase** – Handles authentication, real-time database operations, and cloud storage services.
- **MongoDB** – A NoSQL database used to efficiently manage and store application data.
- **Mongoose** – An Object Data Modeling (ODM) library for MongoDB and Node.js to define schemas and interact with the database.
- **Node.js** – A JavaScript runtime environment for executing server-side code.
- **Express.js** – A minimalist and flexible Node.js web application framework used for creating RESTful APIs and managing backend logic.
- **JWT(JSON Web Token)** – Provides secure user authentication and session management.
- **Vercel** – Platform used for deploying and hosting the backend application.
- **Netlify** – frontend hosting and deployment platform with fast, global CDN delivery.
To set up and run the project, check the [Installation](#installation) section.

## ✨ Key Features
- 🎨 **Customizable Templates**
Choose from multiple professionally designed templates tailored to various industries and preferences.
- 🧩 **Import Existing Resume**
Upload and edit existing resumes using built-in templates.
- 👀 **Real-time Preview**
Instantly view changes as you edit, allowing greater control and customization.
- 📄 **Multiple File Formats**
Download resumes and cover letters in PDF or DOCX formats to suit different job application requirements.
-  🔒 **Data Privacy and Security**
Strong privacy policies and data encryption protect user data and uploaded content.
- 🚀 **Step-by-Step Interactive Guide**
User-friendly navigation through resume sections like Personal Info, Work Experience, Education, Skills, Certifications, and Projects.
- 📊 **Analytics Dashboard (Admin Only)**
Admins can monitor key statistics such as resume downloads and profile view counts.
- 📃 **Cover Letter Generator**
Automatically generate a tailored cover letter to accompany your resume.
- ⭐ **Review and Rating System**
Users can leave feedback and rate their experience using the platform.
- ⛔ **Account Blocking System**
After three failed login attempts, a user's account is blocked. Only an admin can unblock it.
- 🎨 **Profile Customization**
Users can update and personalize their profiles as needed.
- 🔐 **Authentication**
Secure login and account management for saving and managing multiple resumes.
- 📱 **Responsive Design**
Fully optimized for all devices — desktop, tablet, and mobile.

## 📸 Screenshot 
**Home**

![App Screenshot](https://github.com/bikash-sarker-dev/resume360/blob/sadia-afrin/pic1.png)

**Resume Generator**

![App Screenshot](https://github.com/bikash-sarker-dev/resume360/blob/sadia-afrin/pic2.png)

## 📦 Dependencies
This project relies on the following npm packages:

| Package | Description |
|--------|-------------|
| `@emotion/react`, `@emotion/styled` | CSS-in-JS solutions for building styled components in React. |
| `@material-tailwind/react` | Material Design UI components built with Tailwind CSS. |
| `@mui/material`, `@mui/icons-material` | MUI components and icons based on Google’s Material Design. |
| `@react-pdf/renderer` | Create PDF files using React components. |
| `@tailwindcss/vite`, `tailwindcss` | Tailwind CSS integration for Vite and the core styling framework. |
| `@uiw/react-md-editor` | A Markdown editor component for React. |
| `apexcharts`, `react-apexcharts` | Charting libraries for building visual data representations. |
| `axios` | Promise-based HTTP client for the browser and Node.js. |
| `chart.js`, `react-chartjs-2` | JavaScript charting library and its React integration. |
| `docx` | Generate Microsoft Word (.docx) documents in JavaScript. |
| `file-saver` | Save files on the client-side from the browser. |
| `firebase` | Backend-as-a-Service for authentication, database, and hosting. |
| `framer-motion` | Declarative animations and transitions for React. |
| `html2canvas`, `html2pdf.js` | Convert HTML elements into canvas or PDF output. |
| `js-cookie` | A simple JavaScript API for handling browser cookies. |
| `lottie-react` | Render Lottie animations in React apps. |
| `lucide-react` | A modern icon library for React based on Lucide. |
| `react`, `react-dom` | Core libraries for building and rendering React applications. |
| `react-fast-marquee` | Smooth, customizable marquee scrolling component. |
| `react-helmet` | Manage changes to the document head (e.g., title/meta tags). |
| `react-hook-form` | Performant, flexible forms with easy validation in React. |
| `react-icons` | Popular icon sets as React components. |
| `react-rating` | Star-based rating component for React apps. |
| `react-router` | Declarative routing library for React applications. |
| `react-simple-wysiwyg` | Lightweight WYSIWYG HTML editor for React. |
| `react-tabs` | Simple tab interface for React. |
| `sweetalert2` | Modern, customizable alerts and dialogs. |
| `swiper` | Modern, mobile-friendly slider and carousel library. |

To install these dependencies, run:

```sh
npm install
```

## ⚙️ Run Locally

Clone the project

```bash
  git clone https://github.com/bikash-sarker-dev/resume360.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm run dev
```

Start the server

```bash
  npm run start
```

## 🔧 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=your_firebase_api_key`
`VITE_AUTH_DOMAIN=your_firebase_auth_domain`
`VITE_PROJECT_ID=your_firebase_project_id`
`VITE_STORAGE_BUCKET=your_firebase_storage_bucket`
`VITE_MESSAGING_SENDER_ID=your_firebase_sender_id`
`VITE_APP_ID=your_firebase_app_id`
`VITE_SERVER_URL=your_backend_server_url`

## 🔮 Future Enhancements
- Dark mode for enhanced usability
- AI-based suggestion system for resume improvements
- LinkedIn profile import for resume auto-fill.
- AI-based resume score (ATS compatibility checker).
- Multiple language support (English, French, Spanish, etc.).




