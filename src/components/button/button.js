import './button.scss';

const Button = ({className, buttonTitle, style}) => {
    return(
        <button style={style} className={`custom-button ${className}`}>
            {buttonTitle}
        </button>
    )
};

export default Button;