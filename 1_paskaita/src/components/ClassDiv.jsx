import React from 'react';
import ClassButton from './ClassButton';
import PropTypes from 'prop-types'

class ClassDiv extends React.Component {
    render() {
        return (
            <div>
                <h3>Labos</h3>
                <p>Nakties</p>
                <ClassButton title = "Class mygtukas2"/>
                <button>{this.props.title}</button>

            </div>
        )
    }
}

ClassDiv.propTypes = {
    title: PropTypes.string
}

ClassDiv.defaultProps = {
    title: "Swoooooosh"
}

export default ClassDiv;