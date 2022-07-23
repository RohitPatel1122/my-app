import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from 'react-spring';

import NavigationMenu from './NavigationMenu'
function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const masktransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <span>
            <nav className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)} />
            </nav>
            {
                masktransitions(
                    (styles, item) => item &&
                        <animated.div
                            style={styles}
                            className="fixed bg-black-t-50  top-0 left-0 h-full w-full z-50"
                            onClick={() => setShowMenu(false)}
                        >
                        </animated.div>
                )
            }

            {
                menutransitions(
                    (styles, item) => item &&
                        <animated.div
                            style={styles}
                            className="fixed bg-white top-0 left-0 h-full w-4/5 z-50"
                        >
                          <NavigationMenu closeMenu = {() => setShowMenu(false)}></NavigationMenu>  
                        </animated.div>
                )
            }
        </span>
    )
}

export default Navigation