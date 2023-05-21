import PropTypes from 'prop-types'

const catStyle = {
    color: "grey"
}

const priceStyle = {
    fontWeight: "bold"
}

const divContainer = {
    padding: "1rem",
    width: "300px"
}

const Product = ({category, name, price}) => {
    return (
        <div style={divContainer}>
            <p style={catStyle}>{category}</p>
            <p>{name}</p>
            <p style={priceStyle}>{price}</p>
        </div>        
    )
}

Product.propTypes = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

Product.defaultProps = {
    category: "Category",
    name: "Name",
    price: "Price"
}

export default Product