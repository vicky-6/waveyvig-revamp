import React from "react";
import { Accordion } from "react-bootstrap";
import { motion } from "framer-motion";

const AnimatedAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      {[1, 2, 3].map((item) => (
        <Accordion.Item eventKey={item.toString()} key={item}>
          <Accordion.Header>
            <motion.div
              whileHover={{ scale: 1.05, color: "#04dead" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Accordion Item #{item}
            </motion.div>
          </Accordion.Header>

          <Accordion.Body
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            This is the body for accordion item #{item}.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AnimatedAccordion;
