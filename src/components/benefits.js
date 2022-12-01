import { AnimationOnScroll } from "react-animation-on-scroll";
import "../static/styles/components/benefits.less";
import alwaysOpen from "../static/img/247.png";
import planet from "../static/img/planet.png";
import costumer from "../static/img/costumer.png";
import pay from "../static/img/pay.png";
import automation from "../static/img/automation.png";
import improvement from "../static/img/improvement.png";

function Benefits() {
  window.mobileCheck = function () {
    let check = false;
    /* eslint-disable no-useless-escape */
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  const isMobile = window.mobileCheck();

  return (
    <div id='benefits'>
      {isMobile ? (
        <div className='benefits-title animate__animated animate__fadeInUp'>
          <h1>Únete a la era digital</h1>
          <h2>Comienza el camino hacia nuevos horizontes</h2>
        </div>
      ) : (
        <AnimationOnScroll animateIn='animate__fadeIn'>
          <div className='benefits-title'>
            <h1>Únete a la era digital</h1>
            <h2>Comienza el camino hacia nuevos horizontes</h2>
          </div>
        </AnimationOnScroll>
      )}
      <div className='benefit'>
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <div className='benefit-img'>
            <img src={alwaysOpen} alt='' />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <div className='benefit-text'>
            <div className='title'>1. Mantén tu negocio abierto 24/7</div>
            <div className='description'>
              Desde internet puedes mantener tu negocio abierto a toda hora,
              todos los días del año, incluso mientras tú y tus trabajadores
              duermen.
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit change-order'>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
          <div className='benefit-text'>
            <div className='title'>2. Rompe los limites geográficos</div>
            <div className='description'>
              Lleva tus productos o servicios a otros lugares y obtén la
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
              Miles de personas están ahora mismo en internet, muchos de ellos
              podrían estar buscando tus productos o servicios.
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='benefit change-order'>
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
      <div className='benefit change-order'>
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
