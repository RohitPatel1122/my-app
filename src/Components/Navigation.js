import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navigation (){
    const [showMenu, setShowMenu] = useState(false);
    let menu;
    let menuMask;
    if(showMenu){
        menu = 
        <div className="fixed bg-white top-0 left-0 h-full w-4/5 z-50">
            menu
        </div>
        menuMask = 
        <div className="fixed bg-black  top-0 left-0 h-full w-full z-50"
                onClick={()=>setShowMenu(false)}>
            menu
        </div>
    }
    return (
        <span>
            <nav className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={()=>setShowMenu(!showMenu)}/>
            </nav>
            {menuMask}
            {menu}

        </span>
    )
}

export default Navigation