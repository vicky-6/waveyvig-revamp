import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSectionmain";
import OurSolution from "./OurSolution";
import OurServices from "./OurServices";
import WhyChoose from "./WhyChoose";
import MapComponent from "../../components/Maps";

const HomeMain = () => {
  const pageVariant = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  };

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };
  return (
    <div style={{ backgroundColor: "#0b1d57" }}>
      <motion.div
        variants={pageVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <HeroSection />
        <OurSolution />
        <OurServices />
        <WhyChoose />
        <MapComponent />
      </motion.div>
    </div>
  );
};

export default HomeMain;
