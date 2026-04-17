import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #1e3a8a, #020617);
  padding-top: 80px;
`;

export const Card = styled.div`
  position: relative;
  width: 420px;
  padding: 35px;
  border-radius: 20px;
  background: linear-gradient(135deg, #1e3a8a, #1e40af);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  color: white;
  animation: slideUp 0.5s ease;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const Icon = styled.div`
  position: absolute;
  right: 15px;
  top: 18px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  color: white;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 15px;

  a {
    color: #facc15;
    font-weight: bold;
  }
`;

export const Loader = styled.div`
  border: 3px solid #fff;
  border-top: 3px solid transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: auto;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg);}
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;   // 🔥 IMPORTANT FIX
  background: #ef4444;  // make visible
  border: none;
  color: white;
  font-size: 18px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;