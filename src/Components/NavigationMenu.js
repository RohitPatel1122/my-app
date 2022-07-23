
import React from "react";
import {
    Link,
} from 'react-router-dom';
function NavigationMenu(props) {
    return(
        <div>
            <div className="text-center font-bold py-3">
                The Menu
            </div>
            <ul>
                <li>
                    <Link 
                        className='p-3 text-center text-blue-500 py-3 border-t border-b block' 
                        onClick={props.closeMenu}
                        to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className='p-3 text-center text-blue-500 py-3  border-b block' 
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