import React, {useState, useEffect} from 'react';

import './slider.scss';

import Button from '../../ui/button/button';

import back1 from '../../../assets/img/slider-back-1.png'
import back2 from '../../../assets/img/slider-back-2.png'
import back3 from '../../../assets/img/slider-back-3.jpg'
import back4 from '../../../assets/img/slider-back-4.png'

const sliderData = [
    {
        id: 1,
        title: "Бесплатная парковка",
        text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        imgUrl: 'back1',
        buttonColor: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
        img: back1
    },
    {
        id: 2,
        title: "Страховка",
        text: "Полная страховка страховка автомобиля",
        buttonColor: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)",
        img: back2
    },
    {
        id: 3,
        title: "Бензин",
        text: "Полный бак на любой заправке города за наш счёт",
        buttonColor: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)",
        img: back3
    },
    {
        id: 4,
        title: "Обслуживание",
        text: "Автомобиль проходит еженедельное ТО",
        buttonColor: "linear-gradient(90deg, #281349 0%, #720C7B 100%)",
        img: back4
    },
];






const Slider = ({className}) => {
    
    const [slideIndex, setSlideIndex] = useState(3);

    const nextSlide = () => {
        if(slideIndex !== sliderData.length) {
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === sliderData.length){
            setSlideIndex(1)
        }
    }
    
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(sliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    

    return(
        <div className={className}>
            
                <button className="slider-button prev-slide pointer" onClick={prevSlide}>
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="slider-button next-slide pointer" onClick={nextSlide}>
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLnecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <ul className="slider-breadcrumbs-list">
                    {
                    sliderData.map((slide, index) => {
                        return(
                        <li 
                            key={slide.id}
                            className={slideIndex === index+1 ? "slider-breadcrumbs-list-item slider-breadcrumbs-list-item_active" : "slider-breadcrumbs-list-item"}
                            onClick={()=>moveDot(index+1)}>

                        </li>
                            
                        )
                    })
                    }
                </ul>
            {
                sliderData.map((slide, index) => {
                    return(
                        <div key={slide.id} className={slideIndex === index+1 ? "slide container" : "hidden-slide"}
                        style={{backgroundImage: `url(${slide.img})`}}>
                            <div className="slide-content">
                                <h4 className="slide-title">{slide.title}</h4>
                                <p className="slide-text">{slide.text}</p>
                                <div>
                                    <Button className="slide-button" buttonTitle="Подробнее" style={{background:`${slide.buttonColor}`}}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Slider;