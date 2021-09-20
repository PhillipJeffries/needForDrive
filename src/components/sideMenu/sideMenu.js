import './sideMenu.scss';

const SideMenu = () => {
    return (
        <div className="side-menu">
            <button className="burger-button">
            <div></div>
            <div></div>
            <div></div>
            </button>
            <div className="lang-button-wrapper">
                <button className="lang-button">
                    <div className="lang-button-frame"></div>
                    Eng
                </button>
            </div>

        </div>
    )
}

export default SideMenu;