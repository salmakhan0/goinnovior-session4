import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffef8]">

      {/* Website Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Website Footer */}
        <Footer />
    </div>
  );
}