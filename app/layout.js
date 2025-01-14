import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Conversational Agents",
  description: "Implementing the Google Cloud Conversational Agents service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div><Header /></div>  
        <div>{children}</div>
      </body>
    </html>
  );
}
