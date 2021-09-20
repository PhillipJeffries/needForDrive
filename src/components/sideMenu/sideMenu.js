import './sideMenu.scss';

const SideMenu = () => {
    return (
        <div className="side-menu">
            <button className="burger-button">
            <div></div>
            <div></div>
            <div></div>
            </button>
            <button className="eng-button">Eng</button>
        </div>
    )
}

export default SideMenu;