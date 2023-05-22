import PropTypes from 'prop-types'

const Hero = ({title, subtitle}) => {
    if(!title && !subtitle){
        return
    } else if (!title && subtitle){
        return (
            <div className='heroDiv'>
                <p>{subtitle}</p>
            </div>
        )
    } else if (!subtitle && title){
        return (
            <div className='heroDiv'>
                <h1>{title}</h1>
            </div>
        )    }
     else {
        return (
            <div className='heroDiv'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>            
        )
    }
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Hero