import SideMenu from "../../components/common/sideMenu/sideMenu";
import Header from "../../components/common/header/header";
import MainSection from "../../components/common/mainSection/mainSection";
import Button from "../../components/ui/button/button";
import Footer from "../../components/common/footer/footer";
import Slider from "../../components/common/slider/slider";

import styles from "./mainPage.module.scss";



const MainPage = () => (
    <div className={styles.pageContainer}>
      <SideMenu/>
      <div className={styles.pageContent}>
        <div className="container">
          <Header/>
        </div>
        <div className={styles.contentWrapper}>
          <div className="container">
            <MainSection/>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button} 
              buttonTitle="Забронировать"/>
          </div>
        </div>
        <div className={styles.footerWrapper}>
            <Footer/>

        </div>
          
      </div>
        <Slider className="slider"/>
    </div>
);


export default MainPage;



      
