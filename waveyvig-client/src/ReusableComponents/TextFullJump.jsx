import React from "react";
import styled, { keyframes } from "styled-components";
const jump = keyframes`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  60% { transform: translateY(5px); }
`;

const JumpFullText = styled.span`
  display: inline-block;
  animation: ${jump} 1s ease-in-out infinite;
`;

export default JumpFullText;