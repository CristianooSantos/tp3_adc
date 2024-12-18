import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

const AboutUs = () => {
  return (
    <div>
      <h1>Bem-vindo ao nosso TP3 de ADC! 😄✌️</h1>
      <h2>O Nosso Grupo</h2>
      <p>Somos o Cristiano, o Francisco, o Henrique e o Afonso.</p>

      <Carousel>
        <div>
          <img src="images/grupo_chill.png" alt="Foto De Grupo" />
        </div>
        {/* Add more images if necessary */}
        <div>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutUs;
