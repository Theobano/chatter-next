"use client";
import { GoogleIcon } from "../../../../assets/icons";
import { useAuthContext } from "../../../../contexts";
import { LoginPageContainer } from "./LogIn.style";

export default function LoginPage() {
  const { signinWithEmail, signinWithGoogle } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    signinWithEmail(email, password);
  };

  return (
    <LoginPageContainer>
      <h2>Welcome back</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            autoComplete="username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <p className="text-center">or</p>
      <button className="google-login-button" onClick={signinWithGoogle}>
        <GoogleIcon />
        <span>Log in with Google</span>
      </button>
    </LoginPageContainer>
  );
}
