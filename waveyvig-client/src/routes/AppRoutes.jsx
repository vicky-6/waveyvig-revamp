import { Routes, Route, Navigate } from "react-router-dom";

import About from "../pages/About/About";
import CareersMain from "../pages/Careers/CareersMain";
import HomeMain from "../pages/Home/HomeMain";
import TrainingMain from "../pages/Training/TrainingMain";
import Servicesmain from "../pages/Service/Servicesmain";
import Fullstack from "../pages/LiveBootCamp/FullStack";

import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* PUBLIC ROUTES */}
      <Route path="/home" element={<HomeMain />} />
      <Route path="/careers" element={<CareersMain />} />
      <Route path="/training" element={<TrainingMain />} />
      <Route path="/services" element={<Servicesmain />} />
      <Route path="/about" element={<About />} />
      <Route path="/fullstack-course" element={<Fullstack />} />

      {/* 🔐 PROTECTED ROUTES */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default AppRoutes;