import PropTypes from 'prop-types'

const Button = ({title, variant}) => {
    if (variant === "text"){
        return <button className='btnText'>{title}</button>
    } else if (variant === "contained"){
        return <button className='btnContained'>{title}</button>
    } else if (variant === "outlined"){
        return <button className='btnOutlined'>{title}</button>
    } else {
        return
    }
}

Button.propTypes = {
    title: PropTypes.string,
    variant: PropTypes.string
}

export default Button