import styles from './button.module.scss';

const Button = ({className, buttonTitle, style}) => {
    console.log(styles)
    return(
        <button style={style} className={`${styles.customButton} ${className} pointer`}>
            {buttonTitle}
        </button>
    )
};


export default Button;