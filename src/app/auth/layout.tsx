"use client"
import { AuthLayoutContainer } from "./layout.style";
import splash from "./auth-background-image.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthLayoutContainer>
      <div className="aside">
        <div className="overlay">
          <h1>CHATTER</h1>
          <div>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
    </AuthLayoutContainer>
  );
}
