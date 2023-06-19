"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>

    <Provider store={store}>
      {children}
    </Provider>
    </SessionProvider>
  );
};

export default Providers;
  