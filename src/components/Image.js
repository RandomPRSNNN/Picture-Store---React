import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";

function Image(props) {
	const [hovered, setHovered] = useState(false);
	const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);

	function heartIcon() {
		if (props.img.isFavorite) {
			return ( <i onClick={() => toggleFavorite(props.img.id)}
				    className="ri-heart-fill favorite" ></i>
			);
		} else if (hovered) {
			return ( <i onClick={() => toggleFavorite(props.img.id)}
					className="ri-heart-line favorite" ></i>
			);
		}
	}

	function cartIcon() {
        //check if item in cart
		const inCart = cartItems.some((pic) => pic.id === props.img.id);

		if (inCart) {
			return ( <i onClick={() => removeFromCart(props.img.id)}
					className="ri-shopping-cart-fill cart" ></i>
			);
		} else if (hovered) {
			return ( <i onClick={() => addToCart(props.img)}
					className="ri-add-circle-line cart" ></i>
			);
		}
	}

	return (
		<div
			className={`${props.className} image-container`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img src={props.img.url} className="image-grid" />
			{heartIcon()}
			{cartIcon()}
		</div>
	);
}

//ensure that the values passed match the required types
Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Image;
