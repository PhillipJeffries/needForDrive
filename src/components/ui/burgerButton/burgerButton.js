import './burgerButton.scss';

const BurgerButton = ({click}) => {
    return(
        <button className="burger-button" onClick={click}>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </button>
    )
};


export default BurgerButton;