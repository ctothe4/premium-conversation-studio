import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookCallButton from "./BookCallButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">{children}</main>
      <Footer />
      <BookCallButton variant="fixed" />
    </div>
  );
};

export default Layout;
