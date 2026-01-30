import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookCallButton from "./BookCallButton";
import GradientBackground from "./GradientBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <GradientBackground />
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">{children}</main>
      <Footer />
      <BookCallButton variant="fixed" />
    </div>
  );
};

export default Layout;
