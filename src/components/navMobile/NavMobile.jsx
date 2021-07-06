import React from 'react'
import "./style"
import useStyles from './style';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuMobile from "../menuMobile/MenuMobile"

const NavMobile = () => {
    const classes = useStyles();
    return (
        <>
            <div id="mobile-nav" className={classes.root} >
                <HomeRoundedIcon fontSize="large" />
                <MenuRoundedIcon fontSize="large" />
            </div>
            <div id="mobile-menu">
                <MenuMobile />
            </div>
        </>


    )
}

export default NavMobile
