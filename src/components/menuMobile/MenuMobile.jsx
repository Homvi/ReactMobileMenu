import React from 'react'
import useStyles from './style';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import Typography from '@material-ui/core/Typography';

const MenuMobile = () => {
    const classes = useStyles();
    return (
        <div className={classes.menuContainer} >
            <div className={classes.menuItem}>
                <PhoneInTalkRoundedIcon className={classes.menuIcon} />
                <Typography className={classes.menuTyp} variant="h6" >Contact</Typography>
            </div>
            <div className={classes.menuItem}>
                <PhoneInTalkRoundedIcon className={classes.menuIcon} />
                <Typography className={classes.menuTyp} variant="h6" >Contact</Typography>
            </div>
            <div className={classes.menuItem}>
                <PhoneInTalkRoundedIcon className={classes.menuIcon} />
                <Typography className={classes.menuTyp} variant="h6" >Contact</Typography>
            </div>
            <div className={classes.menuItem}>
                <PhoneInTalkRoundedIcon className={classes.menuIcon} />
                <Typography className={classes.menuTyp} variant="h6" >Contact</Typography>
            </div>
        </div>
    )
}

export default MenuMobile
