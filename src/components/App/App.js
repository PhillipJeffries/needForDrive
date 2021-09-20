import './App.scss';

import SideMenu from '../sideMenu/sideMenu';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import Slider from '../slider/slider';
import Footer from '../footer/footer';

function App() {
  return (
    <div className="page-container">
      <SideMenu/>
      <div className="page-content container">
        <Header/>
        <MainSection/>
        <Footer/>
      </div>
      <Slider className="container slider"/>
      
    </div>
  );
}

export default App;
