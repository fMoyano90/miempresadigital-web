import '../static/styles/components/hero.less';
import hero from '../static/img/hero.jpg';

function Hero() {
  return (
    <div id='hero'>
      <div className='title'>
        <h1>Di Hola Mundo y comienza tu negocio en linea</h1>
      </div>
      <div className='img-hero'>
        <img src={hero} alt='' />
      </div>
    </div>
  );
}

export default Hero;
