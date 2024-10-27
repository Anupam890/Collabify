import { useUser, SignedOut, SignIn, SignedIn } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  return (
    <>
      <nav className="h-40 flex items-center justify-between px-4">
        {user && (
          <div>
            <h1>Welcome, {user.fullName}</h1>
          </div>
        )}

        <div>
          <SignedOut>
            <SignIn />
          </SignedOut>
          <SignedIn>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Sign Out
            </button>
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
