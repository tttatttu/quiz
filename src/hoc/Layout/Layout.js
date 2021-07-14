import React, { useState } from "react";
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

const Layout = props => {

	const [state, setState] = useState(false);

	function toggleMenuHandler() {
		setState({
			menu: !state.menu
		})	
	}
	console.log(state);

	return (
		<div className={classes.Layout}>

			<MenuToggle 
				onToggle={toggleMenuHandler}
				isOpen={state.menu}
			/>

			<main>{props.children}</main>
		</div>
	)
};

export default Layout;
