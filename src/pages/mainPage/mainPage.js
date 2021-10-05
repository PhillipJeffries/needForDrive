import SideMenu from "../../components/common/sideMenu/sideMenu";
import Header from "../../components/common/header/header";
import MainSection from "../../components/common/mainSection/mainSection";
import Footer from "../../components/common/footer/footer";
import Slider from "../../components/common/slider/slider";

import styles from "./mainPage.module.scss";



const MainPage = () => (
    <div className={styles.pageContainer}>
      <SideMenu/>
      <div className={`${styles.pageContent} container`}>
        <Header/>
        <MainSection/>
        <Footer/>
      </div>
      <Slider className="slider container"/>
      
    </div>
);

export default MainPage;