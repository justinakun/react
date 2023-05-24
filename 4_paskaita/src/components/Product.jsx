import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import Button from './Button';
import { AiOutlineSearch } from "react-icons/ai";


const Product = ({image, title, price, description, availability, category}) => {

    const[quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity === 1 ? previousQuantity : previousQuantity - 1); //negative values cannot be chosen
    }

    return (
        <div className="containerAll">
            <div className="containerLeft">
                <img src={image} alt={title} className='calendarPic'></img>
                <AiOutlineSearch className='searchBtn'/>
            </div>
            <div className="containerRight">
                <div>
                    <div className='titleDiv'>
                        <h3 className='title'>{title}</h3>
                        <div className='arrowDiv'>
                            <IoIosArrowBack className='arrow'/>
                            <IoIosArrowForward className='arrow'/>
                        </div>                        
                    </div>                  
                    <p className='bold bigger'>{price.toFixed(2)}€</p>
                    {description.split(/:(?!\/)|(?=[A-Z])/).map((line) => <p className='descriptionPara'>{line}</p>)}
                    <p className='bold'>Availability: <span>{availability} in stock</span></p>
                    <div className='flex alignCenter btnsContainer'>                       
                        <button className="miniBtn" onClick={decreaseQuantity}>-</button>
                        <button className="miniBtn">{quantity}</button>
                        <button className="miniBtn" onClick={increaseQuantity}>+</button>                    
                        <Button onClick={() => alert("Added to cart")}>ADD TO CART</Button>                                
                    </div>                    
                    <p>Category: {category}</p>
                </div>                
            </div>
        </div>
    );
};

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
};

export default Product;