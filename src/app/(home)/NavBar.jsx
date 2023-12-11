"use client"
import Link from "next/link";
import { NavBarContainer } from "./NavBar.style";

export function NavBar() {
  return (
    <NavBarContainer>
      <Link href="/" className="logo">
        CHATTER
      </Link>
      <div className="nav-inpage">
        <Link href="/">Home</Link>
        <Link href="#about">About us</Link>
        <Link href="#contact">Contact</Link>
        <Link href="/feed">Blogs</Link>
      </div>
      <div className="nav-auth">
        <Link href="/auth/login">Log in</Link>
        <Link href="/auth/register">Sign up</Link>
      </div>
    </NavBarContainer>
  );
}
