import React from 'react';
import './Hero.css'
 import img1 from '../Hero/dragon_1.jpg'
 import img2 from '../Hero/movie1.jpg'
 import img3 from '../Hero/movie2.webp'
 import img4 from '../Hero/movie3.jpeg'
 import img5 from '../Hero/movie4.jpg'


 import Home from './Home.js';

const Hero = () => {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img4,
        img3,
        img2,
        img1,
       
  
  
     
    ];

    return (
        <>
         <div div className='body'>
          <div className="banner">
            <div className="slider" style={{ '--quantity': images.length }}>
                {images.map((src, index) => (
                    <div className="item" key={index} style={{ '--position': index + 1 }}>
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="content">
                <h1 data-content="ZenZy Movie">
                    ZenZy Movie
                </h1>
                <div className="author">
                    <h2>Praveen Raghav</h2>
                    <p><b>Web Developer</b></p>
                   
                </div>
                <div className="model"></div>
            </div>
        </div>
        
        </div>
       <div>
        
        <Home/>
       </div>
        </>
       
      
    );
};

export default Hero;
