import React from "react";
import NavbarTitle from "./NavbarTitle"
import { navbarMenus } from "./NavbarInfo"
import styles from "./NavbarMenu.module.css"
import { Menu } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
    return (
        <div className={styles.flexContainer}>
            <div>
                <NavbarTitle />
            </div>
            <div>
                <Menu mode="horizontal" className={styles.navbarMenu}>
                    {navbarMenus.map(item => {
                        return (
                            <Menu.Item key={item.id}>
                                <Link to={item.url} >
                                    {item.name}
                                </Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        </div >
    );
};
