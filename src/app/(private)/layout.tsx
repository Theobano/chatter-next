"use client";
import { Sidebar, Topbar } from "../../components";
import { PrivateRouteWrapperContainer } from "./layout.style";
import { useRef, useEffect } from "react";
import { ArticleProvider, useAuthContext } from "../../contexts";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function PrivateRouteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authState } = useAuthContext();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const user = getAuth().currentUser;

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // router.push("/auth/login");
    }
  }, [authState.isAuthenticated]);

  useEffect(() => {
    if (user) {
      if (!user.emailVerified) {
        router.push("/auth/verify-email");
      }
    }
  }, [user?.emailVerified]);
  return (
    <PrivateRouteWrapperContainer>
      <Sidebar sidebarRef={sidebarRef} />
      <main>
        <Topbar sidebarRef={sidebarRef} />
        <ArticleProvider>{children}</ArticleProvider>
      </main>
    </PrivateRouteWrapperContainer>
  );
}
