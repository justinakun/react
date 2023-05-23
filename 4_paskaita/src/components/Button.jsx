import PropTypes from 'prop-types'

const Button = ({title}) => {
    return <button className='bigBtn'>{title}</button>
}

Button.propTypes = {
    title: PropTypes.string
}

Button.defaultProps = {
    title: "Submit"
}

export default Button