import "./App.css";

import WaveyvigTechNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/Chatbot";

import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollTop";
import CursorGlow from "./components/CursorGlow";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      {/* ✅ Always show Navbar */}
      <WaveyvigTechNavbar />
      <CursorGlow />

      <ScrollToTop />

      {/* ✅ Routes */}
      <AppRoutes />

      {/* ✅ Toast */}
      <ToastContainer position="top-center" />

      {/* ✅ Layout components */}
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </ParallaxProvider>
  );
}

export default App;
