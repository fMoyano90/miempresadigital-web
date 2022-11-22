import "../static/styles/components/hero.less";
import hero from "../static/img/hero.mp4";
import heroText from "../static/img/hero-text.mp4";

function Hero() {
  return (
    <div id='hero'>
      <div className='title'>
        <video autoPlay muted>
          <source src={heroText} type='video/mp4' />
        </video>
      </div>
      <div className='video-hero'>
        <video autoPlay loop muted>
          <source src={hero} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Hero;
