import React from "react";
import PropTypes from "prop-types"
import defaultImage from "../assetss/square-image.png"

const Products = ({image, name, price })=>{
  const url = image && image.url
    return (
        <div className="product">
        <h3>{name}</h3>
        <img src={url || defaultImage } alt="name"></img>
        <p>{price}</p>
        </div>
    )
}

Products.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  Products.defaultProps = {
    name: 'my default name',
    price: 15,
    image: defaultImage,
  };

export default Products;