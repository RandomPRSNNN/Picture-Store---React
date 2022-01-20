import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
	const { cartItems } = useContext(Context);

	function cartIconClass() {
		if (cartItems.length > 0) {
			return "ri-shopping-cart-fill ri-fw ri-2x";
		} else {
			return "ri-shopping-cart-line ri-fw ri-2x";
		}
	}

	return (
		<header>
			<Link to="/">
				<h2>Picture Store</h2>
			</Link>
			<Link to="/cart">
				<i className={cartIconClass()}></i>
			</Link>
		</header>
	);
}

export default Header;
