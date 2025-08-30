'use client'
import { useSelector } from "react-redux";


const Lang = ({component}) =>{

    const { Language } = useSelector((state) => state);

    return(
        <div className={`${Language.data === "BN" && "font-SolaimanLipi"}`}>
            {component}
        </div>
    )
}
export default Lang;