import Product from "./Product";

const headingStyle = {
    textAlign: "center",
    fontSize: "2rem"
}

const prodContStyle = {
    display: "flex",
    flexWrap: "wrap"
}

const Products = () => {
    return (
        <div>
            <p style={headingStyle}>BEST SELLERS</p>
            <div style={prodContStyle}>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
            </div>      
        </div>                
    )
}

export default Products