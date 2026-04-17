import React, { useEffect, useState } from "react";
import API from "../utils/api";
import styled from "styled-components";
import { FaEdit, FaSave, FaLock } from "react-icons/fa";

// ---------- STYLES ----------
const Wrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle, #1e3a8a, #020617);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 500px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  color: white;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 10px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #22c55e;
  color: white;
  margin-top: 10px;
`;

// ---------- COMPONENT ----------
function Profile() {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  // 🔥 Fetch profile
  useEffect(() => {
    API.get("/auth/profile")
      .then((res) => setUser(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  // 🔥 Handle input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔥 Update profile
  const handleUpdate = async () => {
    try {
      const res = await API.put("/auth/update", user);
      setUser(res.data);
      alert("Updated successfully");
      setEdit(false);
    } catch {
      alert("Update failed");
    }
  };

  // 🔥 Upload image
  const handleFile = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await API.post("/auth/upload", formData);
      setUser(res.data);
    } catch {
      alert("Upload failed");
    }
  };

  // 🔥 Change password
  const handlePasswordChange = async () => {
    try {
      await API.put("/auth/change-password", passwords);
      alert("Password updated");
      setPasswordMode(false);
    } catch {
      alert("Wrong password");
    }
  };

  return (
    <Wrapper>
      <Card>
        {/* PROFILE IMAGE */}
        <Avatar
          src={
            user.profilePic
              ? `http://localhost:5000/uploads/${user.profilePic}`
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
        />

        <input type="file" onChange={handleFile} />

        <h3 className="text-center mt-3">{user.name}</h3>

        {/* VIEW MODE */}
        {!edit && !passwordMode && (
          <>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Qualification: {user.qualification}</p>
            <p>Created: {user.createdAt && new Date(user.createdAt).toLocaleString()}</p>

            <Button onClick={() => setEdit(true)}>
              <FaEdit /> Edit Profile
            </Button>

            <Button onClick={() => setPasswordMode(true)}>
              <FaLock /> Change Password
            </Button>
          </>
        )}

        {/* EDIT MODE */}
        {edit && (
          <>
            <Input name="name" value={user.name || ""} onChange={handleChange} />
            <Input name="email" value={user.email || ""} onChange={handleChange} />
            <Input name="age" value={user.age || ""} onChange={handleChange} />
            <Input name="qualification" value={user.qualification || ""} onChange={handleChange} />

            <Button onClick={handleUpdate}>
              <FaSave /> Save Changes
            </Button>
          </>
        )}

        {/* PASSWORD MODE */}
        {passwordMode && (
          <>
            <Input
              type="password"
              placeholder="Old Password"
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
            />

            <Input
              type="password"
              placeholder="New Password"
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />

            <Button onClick={handlePasswordChange}>
              <FaSave /> Update Password
            </Button>
          </>
        )}
      </Card>
    </Wrapper>
  );
}

export default Profile;