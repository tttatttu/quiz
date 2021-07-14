import { closeSync } from "fs-extra";
import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Drawer.module.css';


const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
]

function renderLinks() {
    return links.map((link, i) => {
        return (
            <li key={i}>
                <NavLink
                    to = {link.to}
                    exact = {link.exact}
                    activeClassName={classes.active}
                >
                    {link.label}
                </NavLink>
            </li>
        )
    })
}

const Drawer = () => (
    
  <div>
    <React.Fragment>
        <nav className={closeSync.join(' ')}>
            <ul>
                {renderLinks()}
            </ul>
        </nav>
        
    </React.Fragment>
  </div>
);

export default Drawer;