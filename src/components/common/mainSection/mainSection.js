import './mainSection.scss'

import Button from '../../ui/button/button';

const MainSection = () => {
    return(
        <section className="content-wrapper">
            <h1 className="main-title">Каршеринг<span className="green">Need for drive</span></h1>
            <span className="main-page-description grey">Поминутная аренда авто твоего города</span>
            <div className="button-wrapper">
                <Button buttonTitle="Забронировать"/>
            </div>
        </section>
    )
}

export default MainSection;
