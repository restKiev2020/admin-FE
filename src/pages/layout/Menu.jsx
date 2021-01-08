import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from 'react-router-dom';
import Urls from "../../model/Urls";

const itemStyles = { textDecoration: 'none', color: 'unset' };

export default function Menu({classes, open, toggleDrawer}) {
    return <Drawer
        variant="persistent"
        classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        style={{
            width: 0,
        }}
    >
        <div className={classes.toolbarIcon}>
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
            <List>
                <div>
                    <NavLink to={Urls.USER_LIST_PAGE_URL} style={itemStyles}>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Пользователи" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={Urls.ADVERT_PAGE_URL} style={itemStyles}>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Объекты" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={Urls.ADVERT_REQUEST_PAGE_URL} style={itemStyles}>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Запросы" />
                        </ListItem>
                    </NavLink>
                </div>
            </List>
        <Divider/>
    </Drawer>
}
