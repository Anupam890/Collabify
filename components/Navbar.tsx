"use client";
import {
  useUser,
  SignedOut,
  SignInButton,
  SignIn,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4">
        {user && (
          <div>
            <h1> {user.fullName}</h1>
          </div>
        )}

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
