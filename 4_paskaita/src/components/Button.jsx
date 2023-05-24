const Button = ({ children, ...rest }) => {
    return <button className='bigBtn' {...rest}>{children}</button>
};

export default Button;