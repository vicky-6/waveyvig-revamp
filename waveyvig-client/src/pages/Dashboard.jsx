import React, { useEffect, useState } from "react";
import API from "../utils/api";
import styled from "styled-components";
import { FaUser, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ---------- STYLES ----------
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #020617;
  color: white;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #0f172a;
  padding: 20px;
`;

const MenuItem = styled.div`
  padding: 12px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background: #1e293b;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 30px;
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: rgba(255,255,255,0.05);
  margin-bottom: 20px;
`;

// ---------- COMPONENT ----------
function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/profile").then((res) => setUser(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Wrapper>
      {/* SIDEBAR */}
      <Sidebar>
        <h3>Waveyvig</h3>

        <MenuItem onClick={() => navigate("/profile")}>
          <FaUser /> Profile
        </MenuItem>

        <MenuItem>
          <FaChartBar /> Dashboard
        </MenuItem>

        <MenuItem onClick={logout}>
          <FaSignOutAlt /> Logout
        </MenuItem>
      </Sidebar>

      {/* MAIN CONTENT */}
      <Content>
        <h2>📊 Dashboard</h2>

        <Card>
          <h4>👤 User Info</h4>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </Card>

        <Card>
          <h4>📈 Account Status</h4>
          <p>Status: Active</p>
          <p>Email Verified: {user.isVerified ? "Yes" : "No"}</p>
        </Card>
      </Content>
    </Wrapper>
  );
}

export default Dashboard;