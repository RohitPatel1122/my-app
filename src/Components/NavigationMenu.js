
import React from "react";
import {
    Link,
} from 'react-router-dom';
function NavigationMenu(props) {
    return(
        <div>
            <span className="font-bold p-3">The Menu</span>
            <ul>
                <li>
                    <Link 
                        className='text-blue-500' 
                        onClick={props.closeMenu}
                        to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className='text-blue-500' 
                        onClick={props.closeMenu}
                        to='/about'>
                             About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;