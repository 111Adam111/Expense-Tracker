"use client";
import { signOut, signIn, useSession } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session?.user);
  if (session && session.user) {
    return (
      <div>
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()} className="text-red-600">
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
