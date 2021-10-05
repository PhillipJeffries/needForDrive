import Button from '../../ui/button/button';

import styles from './mainSection.module.scss'

const MainSection = () => {
    return(
        <section className={styles.contentWrapper}>
            <h1 className={styles.mainTitle}>Каршеринг<span className="green">Need for drive</span></h1>
            <span className={`${styles.mainPageDescription} grey`}>Поминутная аренда авто твоего города</span>
            <div className={styles.buttonWrapper}>
                <Button buttonTitle="Забронировать"/>
            </div>
        </section>
    )
}

export default MainSection;
