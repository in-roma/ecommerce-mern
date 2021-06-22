import React from 'react';
import './product.scss';

const Product = ({ product }) => {
	return (
		<div className="product" key={product._id}>
			<div className="picture">
				<img src={product.image} />
			</div>
			<div className="product-caption">
				<div className="product-text">
					<span className="product-title">{product.name}</span>
					<span className="product-brand">{product.brand}</span>
				</div>
				<span className="product-price">{product.price} euros</span>
			</div>
		</div>
	);
};

export default Product;
