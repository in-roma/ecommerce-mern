import React from 'react';
import './header.scss';

const Header = () => {
	return (
		<header className="navBar">
			<div className="logo">PRO SHOP</div>

			<div className="menu">
				<div className="menu-button cart">
					<span>CART</span>
				</div>
				<div className="menu-button login">
					<span>SIGN-IN</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
