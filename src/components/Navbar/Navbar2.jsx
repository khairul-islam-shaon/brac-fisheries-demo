import { getNav } from "@/utils/getNav";
import Navbar from "@/components/Navbar/Navbar";
import NavbarContent from "./NavbarContent";

const Navbar2 = async () => {
  const nav = await getNav();

  return (
    <>
      <NavbarContent nav={nav} navData={nav?.data} />
    </>
  );
};

export default Navbar2;
