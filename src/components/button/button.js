import './button.scss';

const Button = ({buttonTitle}) => {
    return(
        <button className="custom-button">
            {buttonTitle}
        </button>
    )
};

export default Button;