import "../static/styles/components/about.less";
import group from "../static/img/group.png";
import handshake from "../static/img/handshake.png";
import connection from "../static/img/connection.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const settingsCarousel = {
  autoPlay: true,
  infiniteLoop: true,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  interval: 5000,
}

function About() {
  return (
    <div id='about'>
      <h1>SOMOS TU MEJOR PARTNER DIGITAL</h1>
      <Carousel className='our-benefits' {...settingsCarousel}>
        <div className='our-benefit'>
          <img src={group} alt='' />
          <h3>
            1. Un equipo multidiciplinario se encargara del desarrollo y de las
            mejoras continuas en tus productos
          </h3>
        </div>
        <div className='our-benefit'>
          <img src={handshake} alt='' />
          <h3>
            2. Participaras continua y activamente en la elaboración de tus
            productos, siempre sabras en que estamos
          </h3>
        </div>
        <div className='our-benefit'>
          <img src={connection} alt='' />
          <h3>
            3. Usando medotologias agiles y potentes técnologias conseguiremos los
            productos esperados
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
