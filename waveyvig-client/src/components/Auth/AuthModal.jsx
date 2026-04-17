import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";

// 🔥 ONLY OVERLAY (NO EXTRA BOX)
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

function AuthModal({ type, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {type === "login" ? (
          <Login isModal={true} onClose={onClose} />
        ) : (
          <Signup isModal={true} onClose={onClose} />
        )}
      </div>
    </Overlay>
  );
}

export default AuthModal;
