import Navbar from "@/components/Navbar";
import Providers from "../components/Providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
