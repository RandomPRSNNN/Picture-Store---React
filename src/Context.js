import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
	const [allPhotos, setAllPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	//get photos from API and save them as json to allPhotos array - on mount
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
		)
			.then((response) => response.json())
			.then((data) => setAllPhotos(data));
	}, []);

	function addToCart(newImage) {
		setCartItems((prevItems) => [...prevItems, newImage]);
	}

	function removeFromCart(id) {
		//keep items that dont have the id thats being passed
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	function emptyCart() {
		setCartItems([]);
	}

	function toggleFavorite(id) {
		const updatedArr = allPhotos.map((photo) => {
			if (photo.id === id) {
				return {
					...photo,
					isFavorite: !photo.isFavorite,
				};
			}
			return photo;
		});
		setAllPhotos(updatedArr);
	}

	return (
		//b1 JS, b2 object
		<Context.Provider
			value={{
				allPhotos,
				toggleFavorite,
				addToCart,
				cartItems,
				removeFromCart,
				emptyCart,
			}}
		>
			{props.children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
