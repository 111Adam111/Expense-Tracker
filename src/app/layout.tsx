"use client";
import Navbar from "@/components/Navbar";
import Providers from "../components/Providers";
import { Container } from "@mui/material";

export const metadata = {
  title: "Expanse tracker",
  description: "Track your spendings and unlock your financial potential!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Container maxWidth="lg">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
