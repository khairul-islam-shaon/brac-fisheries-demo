import {getNav} from "@/utils/getNav";
import Navbar from "@/components/Navbar/Navbar";

const NavBarApiCall = async () =>{
    const nav = await getNav();

   
    return(
        <>
            <Navbar nav ={nav} navData={nav?.data}/>
        </>
    )
}

export default NavBarApiCall;