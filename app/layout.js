import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../providers/ThemeProvider";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AuthProvider from "./../providers/AuthProvider";
import Intro from "@/components/intro/Intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <Navbar />
              <Intro />

              <div className="container">
                <div className="wrapper">{children}</div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
