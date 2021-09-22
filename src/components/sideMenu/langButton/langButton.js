import './langButton.scss';

const LangButton = ({className, title}) => {
    return(
        <div className={`lang-button-wrapper ${className}`}>
            <button className="lang-button">
                <div className="lang-button-frame"></div>
                {title}
            </button>
        </div>
    )
}

export default LangButton;