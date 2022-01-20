import React, { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem(props) {
	const { removeFromCart } = useContext(Context);
	const [hovered, setHovered] = useState(false);

	function removeIcon() {
		if (hovered) {
			return "ri-delete-bin-fill";
		} else {
			return "ri-delete-bin-line";
		}
	}

	return (
		<div className="cart-item">
			<i
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={() => removeFromCart(props.item.id)}
				className={removeIcon()}
			></i>
			<img src={props.item.url} width="130px" />
			<p>€5.99</p>
		</div>
	);
}

export default CartItem;
