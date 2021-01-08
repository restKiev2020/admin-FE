import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import React from "react";
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import AuthService from '../../auth/AuthService';

export default function CustomerButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        AuthService.logout();
    }

    return  (
        <div>
            {AuthService.userData.userName + ' ' + AuthService.userData.lastName}
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
