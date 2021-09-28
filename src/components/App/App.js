import './App.scss';

import SideMenu from '../sideMenu/sideMenu';
import Header from '../header/header';
import MainSection from '../mainSection/mainSection';
import Slider from '../slider/slider';
import Footer from '../footer/footer';

import OrderBreadCrumbs from '../orderBreadCrumbs/orderBreadCrumbs';

import {useState} from 'react';

const arrow = <svg className="arrow" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
</svg>;

function App() {

  const [togglePage, setTogglePage] = useState(false)

  if(togglePage){
    return (
      <div className="page-container">
        <SideMenu/>
        <div className="page-content container">
          <Header/>
          <MainSection/>
          <Footer/>
        </div>
        <Slider className="slider container"/>
        
      </div>
    );
  }
  else{
    return(
      <div className="page-container">
        <SideMenu/>
        <div className="page-content">
            <Header className="container"/>
          <OrderBreadCrumbs/>
          <div className="order-page-content">
            <div className="order-page-form">
            fg
            </div>
            <div className="order-page-form-result">
              sfd
            </div>

          </div>
        </div>
      </div>
    )
  }


          
        
        

}

export default App;
