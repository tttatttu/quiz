import React from "react";
import classes from './MenuToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
    ];

    if (props.isOpen) {
        // cls.push('fa-times')
        cls.push(classes.open)
    } else {
        // cls.push('fa-bars')
    }

    return (
        <FontAwesomeIcon 
            className={cls.join(' && ')} 
            
            icon={props.isOpen ? faTimes : faBars} 
            onClick={props.onToggle}/>
    )
};

export default MenuToggle;