import PropTypes from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from 'react'
import Button from './Button'


const Product = ({image, title, price, description, availability, category}) => {

    const[quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity === 1 ? previousQuantity : previousQuantity - 1) //negative values cannot be chosen
    }

    return (
        <div className="containerAll">
            <div className="containerLeft">
                <img src={image} alt="Calendar" className='calendarPic'></img>
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
                    <p className='bold'>{price}</p>
                    {description.split(/(?=[A-Z])/).map((line) => <p>{line}</p>)}
                    <p className='bold'>Availability: <span>{availability} in stock</span></p>
                    <div className='flex alignCenter btnsContainer'>                        
                        <button className="miniBtn" onClick={decreaseQuantity}>-</button>
                        <button className="miniBtn">{quantity}</button>
                        <button className="miniBtn" onClick={increaseQuantity}>+</button>                    
                        <Button title="ADD TO CART" />                                
                    </div>                    
                    <p>Category: {category}</p>
                </div>                
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    availability: PropTypes.number,
    category: PropTypes.string
}

export default Product