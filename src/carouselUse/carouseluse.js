import React, { useState, useEffect } from 'react';
import picture1 from "../../src/assests/image/picture1.jpeg"
import picture2 from "../../src/assests/image/picture2.jpg"
import picture3 from "../../src/assests/image/picture3.jpg"
import leftArrow from "../../src/assests/image/leftArrow.png"
import rightArrow from "../../src/assests/image/rightArrow.png"

const pictureData = [
    {
        picture: picture1,
        title: "Kedarnath Yatra ",
        text: "Experience the Spiritual Wonders of Kedarnath"
    },

    {
        picture: picture2,
        title: "Char Dham Yatra",
        text: "Embark on a Divine Journey: Find Peace and Spiritual Renewal on the Char Dham Yatra"
    },

    {
        picture: picture3,
        title: "Kedarkantha Trek",
        text: "Discover the Breathtaking Kedarkantha Trek in the Majestic Himalayas!"
    },
];

function CarouselSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClickLeft = () => {
        setCurrentSlide((prev) => (prev - 1 + pictureData.length) % pictureData.length);
    };

    const handleClickRight = () => {
        setCurrentSlide((prev) => (prev + 1) % pictureData.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex + 1) % pictureData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <img src={pictureData[currentSlide].picture}
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight:'708px',
                    objectFit: 'cover'
                }}
                alt='picture'
            />
            <div
                style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'clamp(16px, 5vw, 30px)',
                    marginTop: '5%',
                    width: '80%',
                    maxWidth: '600px'
                }}>
                <h1 style={{ color: '#ffffff', fontSize: 'clamp(24px, 8vw, 50px)' }}>{pictureData[currentSlide].title}</h1>
                <p style={{ color: '#ffffff', fontSize: 'clamp(14px, 4vw, 20px)' }}>" {pictureData[currentSlide].text} "</p>
            </div>
            <img
                onClick={handleClickLeft}
                src={leftArrow}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '15%',
                    backgroundColor:'red',
                    transform: 'translateY(-50%)',
                    width: 'clamp(20px, 5vw, 50px)',
                    height: 'auto',
                    cursor: 'pointer',
                }} />
            <img
                onClick={handleClickRight}
                src={rightArrow}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '15%',
                    backgroundColor:'red',
                    transform: 'translateY(-50%)',
                    width: 'clamp(20px, 5vw, 50px)',
                    height: 'auto',
                    cursor: 'pointer',
                }} />
        </div>
    )
}

export default CarouselSlider;
