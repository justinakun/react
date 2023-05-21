import FuncButton from "./FuncButton";
import PropTypes from 'prop-types'

function FuncDiv(props){
    return(
        <div>
            <h3>Hello</h3>
            <p>It's me</p>
            <FuncButton title="Kazkoks tekstas"/>
            <button>{props.title}</button>
        </div>        
    )
}

FuncDiv.propTypes = {
    title: PropTypes.string
}

FuncDiv.defaultProps = {
    title: "Aheeeemmmm"
}

export default FuncDiv;