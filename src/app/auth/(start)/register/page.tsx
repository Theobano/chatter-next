"use client";
import { useRef } from "react";
import { RegisterContainer } from "./Register.style";
import { useAuthContext } from "../../../../contexts";
import { GoogleIcon } from "../../../../assets/icons";

export default function Register() {
  const {
    signupWithEmail,
    signupWithGoogleAsReader,
    signupWithGoogleAsWriter,
  } = useAuthContext();
  const registerFormRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
    registerFormRef.current!.reportValidity();
    for (const input of registerFormRef.current!.elements as any) {
      if (!input.checkValidity()) {
        input.reportValidity();
        // chane input border color to red
        input.classList.add("invalid");
      }
    }

    const formData = new FormData(registerFormRef.current!);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      return;
    }

    signupWithEmail(
      data.email,
      data.password,
      data.firstName,
      data.lastName,
      data.role === "writer"
    );
  }

  return (
    <RegisterContainer>
      <h2>Register as a Writer/Reader</h2>
      <form className="register-form" ref={registerFormRef} onSubmit={onSubmit}>
        <div className="name-container">
          <div className="input-container">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              placeholder="John"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              placeholder="Doe"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="role">You are joining as:</label>
          <select name="role" id="role" required>
            <option value="reader">Reader</option>
            <option value="writer">Writer</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="username"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            autoComplete="new-password"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="********"
            autoComplete="new-password"
          />
        </div>
        <button
          type="submit"
          name="submit"
          className="submit-button"
          aria-label="create account"
        >
          Create account
        </button>
      </form>
      <button className="google-auth-button" onClick={signupWithGoogleAsReader}>
        <GoogleIcon />
        <span>Register as Reader with Google</span>
      </button>
      <button className="google-auth-button" onClick={signupWithGoogleAsWriter}>
        <GoogleIcon />
        <span>Register as Writer with Google</span>
      </button>
    </RegisterContainer>
  );
}
