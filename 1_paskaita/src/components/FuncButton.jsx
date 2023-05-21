import PropTypes from 'prop-types'

function FuncButton(props) {
    return <button>{props.title}</button>
}

FuncButton.propTypes = {
    title: PropTypes.string
}

FuncButton.defaultProps = {
    title: "Bzzzzzzz"
}

export default FuncButton;