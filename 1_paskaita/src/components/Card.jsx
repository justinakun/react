import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div class="cardContainer">
            <div class="cardContDiv"><img src={props.imageURL} alt={props.title} class="image"/></div>
            <div class="cardContDiv">
                <p class="cardTitle">{props.title}</p>
                <p class="cardSubtitle">{props.subtitle}</p>
            </div>       
        </div>
    )
}

Card.propTypes = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

Card.defaultProps = {
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDotvRgWG99cr13WYFWH3iBVHnLYdsQO9dPw&usqp=CAU",
    title: "Animal",
    subtitle: "A short description of an animal"
}

export default Card