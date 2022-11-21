import { AnimationOnScroll } from "react-animation-on-scroll";
import "../static/styles/components/benefits.less";
import alwaysOpen from "../static/img/247.png";
import planet from "../static/img/planet.png";
import costumer from "../static/img/costumer.png";
import pay from "../static/img/pay.png";
import automation from "../static/img/automation.png";
import improvement from "../static/img/improvement.png";

function Benefits() {
  return (
    <div id='benefits'>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='benefits-title'>
          <h1>Únete a la era digital</h1>
          <h2>Comienza el camino hacia nuevos horizontes</h2>
        </div>
      </AnimationOnScroll>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <div className='benefit-img'>
            <img src={alwaysOpen} alt='' />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <div className='benefit-text'>
            <div className='title'>1. Manten tu negocio abierto 24/7</div>
            <div className='description'>
              Desde internet puedes mantener tu negocio abierto a toda hora,
              todos los días del año, incluso mientras tú y tus trabajadores
              duermen.
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-text'>
            <div className='title'>2. Rompe los limites geograficos</div>
            <div className='description'>
              Lleva tus productos o servicios a otros lugares y obten la
              posibilidad de expandir tu negocio.
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-img'>
            <img src={planet} alt='' />
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <div className='benefit-img'>
            <img src={costumer} alt='' />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <div className='benefit-text'>
            <div className='title'>3. Llega a nuevos clientes</div>
            <div className='description'>
              Miles de personas estan ahora mismo en internet, muchos de ellos
              podrian estar buscando tus productos o servicios.
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-text'>
            <div className='title'>
              4. Recibe pagos desde tu web o app móvil
            </div>
            <div className='description'>
              Recibe los pagos de las compras de tus productos o servicios
              directamente en tu cuenta corriente.
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-img'>
            <img src={pay} alt='' />
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <div className='benefit-img'>
            <img src={automation} alt='' />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <div className='benefit-text'>
            <div className='title'>5. Automatiza los procesos</div>
            <div className='description'>
              Agenda los servicios que ofreces, lleva el control de los pedidos,
              notifica a tus clientes, las opciones son ilimitadas, crea lo que
              necesite tu empresa.
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-text'>
            <div className='title'>6. Mejora continuamente</div>
            <div className='description'>
              Comienza a la medida que necesitas, siempre podrás ir mejorando
              tus productos de forma progresiva.
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-img'>
            <img src={improvement} alt='' />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Benefits;
