import styles from './button.module.scss';

const Button = ({className, buttonTitle, style}) => {
    console.log(styles)
    return(
            <button className={`${styles.customButton} ${className}`}>
                <div style={style} className={styles.bg}></div>
                {buttonTitle}
            </button>           
    

    )
};


export default Button;