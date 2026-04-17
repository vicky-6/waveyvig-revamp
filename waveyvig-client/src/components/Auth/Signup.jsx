import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../utils/api";
import { toast } from "react-toastify";

import {
  PageWrapper,
  Card,
  Title,
  Input,
  Button,
  LinkText,
  Loader,
  CloseButton,
} from "./AuthStyles";

function Signup({ isModal, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    qualification: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return toast.error("Please fill required fields");
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/signup", form);

      localStorage.setItem("token", res.data.token);

      toast.success("Signup Successful 🎉");

      // 🔥 IMPORTANT FIX (MODAL CLOSE)
      setTimeout(() => {
        if (isModal && onClose) {
          onClose();   // ✅ CLOSE MODAL
        } else {
          navigate("/");
        }
      }, 800);

    } catch (err) {
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 MODAL VERSION
  if (isModal) {
    return (
      <Card>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </CloseButton>

        <Title>Signup</Title>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="👤 Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="📧 Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            placeholder="🎂 Age"
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <Input
            placeholder="🎓 Qualification"
            onChange={(e) =>
              setForm({ ...form, qualification: e.target.value })
            }
          />

          <Input
            type="password"
            placeholder="🔒 Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button>{loading ? <Loader /> : "Signup"}</Button>
        </form>
      </Card>
    );
  }

  // 🔥 PAGE VERSION
  return (
    <PageWrapper>
      <Card>
        <CloseButton onClick={() => navigate("/")}>✕</CloseButton>

        <Title>Signup</Title>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="👤 Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="📧 Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            placeholder="🎂 Age"
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <Input
            placeholder="🎓 Qualification"
            onChange={(e) =>
              setForm({ ...form, qualification: e.target.value })
            }
          />

          <Input
            type="password"
            placeholder="🔒 Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button>{loading ? <Loader /> : "Signup"}</Button>
        </form>

        <LinkText>
          Already have an account? <Link to="/login">Login</Link>
        </LinkText>
      </Card>
    </PageWrapper>
  );
}

export default Signup;