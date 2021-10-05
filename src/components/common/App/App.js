import SideMenu from '../sideMenu/sideMenu';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import Slider from '../slider/slider';
import Footer from '../footer/footer';

import styles from './App.module.scss';

function App() {
  return (
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
}

export default App;

