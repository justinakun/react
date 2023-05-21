import PropTypes from 'prop-types';

const randomColorNumber = Math.floor(Math.random()*16777215).toString(16);
const randomColor = `#${randomColorNumber}`

const divStyle = {
    background: randomColor
}

function Avatar (props){
    const name = props.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()

     return (
        <div class="avatarContainer" style={divStyle}>{name}
        </div>        
    )       
}

Avatar.propTypes = {
    name: PropTypes.string
}

Avatar.defaultProps = {
    name: "Vardas Pavarde"
}

export default Avatar