import "./App.css";

import WaveyvigTechNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/Chatbot";

import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* ✅ Always show Navbar */}
      <WaveyvigTechNavbar />

      {/* ✅ Routes */}
      <AppRoutes />

      {/* ✅ Toast */}
      <ToastContainer position="top-center" />

      {/* ✅ Layout components */}
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}

export default App;