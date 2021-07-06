import React from 'react'
import { useState } from "react"
import "./style"
import useStyles from './style';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { Keyframes, config } from 'react-spring';
import delay from 'delay';
import "./style.css"

const items = [
    {
        key: 1,
        content: "Sign up",
    },
    {
        key: 2,
        content: 'Log in',
    },
    {
        key: 3,
        content: 'Contact',
    },
    {
        key: 4,
        content: 'Sign out',
    },
];

const Menu = Keyframes.Spring({
    in: async next => {
        await next({
            transform: 'translateX(0%)',
        });
    },
    out: async next => {
        await delay(700);
        await next({
            transform: 'translateX(-100%)',
        });
    },
});

const MenuItems = Keyframes.Trail({
    in: async next => {
        await delay(600);
        await next({
            opacity: 1,
            transform: 'translateX(0px)',
        });
    },
    out: async next => {
        await next({
            opacity: 0,
            transform: 'translateX(-40px)',
        });
    },
});


const NavMobile = () => {

    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBtnClick = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <>
            <div id="mobile-nav" className={classes.navBar} >
                <HomeRoundedIcon className={classes.icon} fontSize="large" />
                <MenuRoundedIcon className={classes.icon} onClick={handleBtnClick} fontSize="large" />
            </div>
            <div id="mobile-menu">
                <Menu
                    config={config.gentle}
                    unique
                    state={menuOpen ? 'in' : 'out'}
                >
                    {props => (
                        <nav style={props}>
                            <ul>
                                <MenuItems
                                    keys={item => item.key}
                                    items={items}
                                    state={menuOpen ? 'in' : 'out'}
                                    reverse={!menuOpen}
                                >
                                    {trailitem => trailprops => (
                                        <li style={trailprops}>{trailitem.content}</li>
                                    )}
                                </MenuItems>
                            </ul>
                        </nav>
                    )}
                </Menu>
            </div>
        </>


    )
}

export default NavMobile
