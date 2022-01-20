import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
	const { cartItems, emptyCart } = useContext(Context);
	const totalCost = (5.99 * cartItems.length).toLocaleString("en-GB", {
		style: "currency",
		currency: "EUR",
	});
	const [buttonText, setButtonText] = useState("Place Order");

	const cartItemElements = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	function placeOrder() {
		//after 3 seconds reset on click
		setButtonText("Ordering...");
		setTimeout(() => {
			console.log("Order Placed");
			setButtonText("Place Order");
			emptyCart();
		}, 3000);
	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">Total: {totalCost}</p>

			{cartItems.length > 0 ? (
				<div className="order-button">
					<button onClick={() => placeOrder()}>{buttonText}</button>
				</div>
			) : (
				<p>There are no items in your cart</p>
			)}
		</main>
	);
}

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};

export default Cart;
