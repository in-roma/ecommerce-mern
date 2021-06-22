import React from 'react';
import products from '../../products';
import './homescreen.scss';

// Components

import Product from '../../components/Product/Product';

const HomeScreen = () => {
	return (
		<div className="home-screen">
			<h1>Latest products</h1>
			{products.map((product) => (
				<Product product={product} />
			))}
		</div>
	);
};

export default HomeScreen;
