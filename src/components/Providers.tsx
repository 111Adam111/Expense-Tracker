"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

interface Props {
  children: ReactNode;
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const Providers = ({children}: Props) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
