import PropTypes from 'prop-types';

const Button = ({title, variant = "text"}) => {
    // if (variant === "text"){
    //     return <button className='btnText'>{title}</button>
    // } else if (variant === "contained"){
    //     return <button className='btnContained'>{title}</button>
    // } else if (variant === "outlined"){
    //     return <button className='btnOutlined'>{title}</button>
    // } else {
    //     return
    // }
    return <button className={variant}>{title}</button>
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["text", "contained", "outlined"])
}

export default Button;