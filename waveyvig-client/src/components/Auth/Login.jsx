import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../utils/api";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  PageWrapper,
  Card,
  Title,
  Input,
  Button,
  LinkText,
  Loader,
  InputGroup,
  Icon,
  CloseButton,
} from "./AuthStyles";

function Login({ isModal, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("All fields required");
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful 🚀");

      setTimeout(() => {
        if (isModal) {
          onClose();
        } else {
          navigate("/");
        }
      }, 1000);

    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 CONDITIONAL RENDER (IMPORTANT)
  return isModal ? (
    <Card>
      <CloseButton onClick={onClose}>✕</CloseButton>

      <Title>Login</Title>

      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="📧 Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="🔒 Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Icon onClick={() => setShow(!show)}>
            {show ? <FaEyeSlash /> : <FaEye />}
          </Icon>
        </InputGroup>

        <Button>
          {loading ? <Loader /> : "Login"}
        </Button>
      </form>
    </Card>
  ) : (
    <PageWrapper>
      <Card>
        <CloseButton onClick={() => navigate("/")}>✕</CloseButton>

        <Title>Login</Title>

        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="📧 Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="🔒 Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Icon onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputGroup>

          <Button>
            {loading ? <Loader /> : "Login"}
          </Button>
        </form>

        <LinkText>
          New user? <Link to="/signup">Signup</Link>
        </LinkText>
      </Card>
    </PageWrapper>
  );
}

export default Login;