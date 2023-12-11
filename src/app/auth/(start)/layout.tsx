"use client";
import { AuthLandingLayoutContainer } from "./layout.style";
import { useAuthContext } from "../../../contexts";
import { useEffect } from "react";
import NavLink from "@/components/NavLink/NavLink";
import  {useRouter}  from "next/navigation";

export default function AuthLandingLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { authState } = useAuthContext();

  useEffect(() => {
    if (authState.isAuthenticated) {
      router.push("/feed");
    }
  }, [authState.isAuthenticated]);

  return (
    <AuthLandingLayoutContainer>
      <div className="nav">
        <div>
          <NavLink href="/auth/register" end>
            <div className="nav-text">REGISTER</div>
            <div className="indicator"></div>
          </NavLink>
        </div>
        <div>
          <NavLink href="/auth/login" end>
            <div className="nav-text">LOG IN</div>
            <div className="indicator"></div>
          </NavLink>
        </div>
      </div>
      <div className="outlet-container">{children}</div>
    </AuthLandingLayoutContainer>
  );
}
