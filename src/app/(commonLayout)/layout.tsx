
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { NavbarV2 } from "@/components/shared/Navbar/NavbarV2";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {/* <NavbarV2 /> */}
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
