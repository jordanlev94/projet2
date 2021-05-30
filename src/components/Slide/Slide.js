import React from 'react'
import img1 from '../../images/slide1.png'
import img3 from '../../images/slide2.png'
import img4 from '../../images/slide3.png'
import img5 from '../../images/slide4.png'
import { Slide } from  'react-slideshow-image'
import './Slide.css'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                    
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                    </div>
                    
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img4" />
                    </div>
                    
                </div>
               
            </Slide>
        </div>
    )
}

export default Slideshow;