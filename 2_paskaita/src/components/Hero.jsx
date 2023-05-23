import PropTypes from 'prop-types'

const Hero = ({title, subtitle}) => {
        return (
            <div className='heroDiv'>
                {title && <h1>{title}</h1>}
                {subtitle && <p>{subtitle}</p>}
            </div>            
        )
    }

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Hero