import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, content: 'Slide 1 Content' },
        { id: 2, content: 'Slide 2 Content' },
        { id: 3, content: 'Slide 3 Content' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Previous</button>
            <div className="carousel-content">
                {items[currentIndex].content}
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Carousel;