import "../../static/styles/components/contact/whatsapp.less";
import whatsapp from "../../static/img/whatsapp.png";

function WhatsApp() {
  return (
    <div id='whatsapp'>
      <h1>¡Comienza HOY!</h1>
      <h2>Cotiza con nosotros</h2>
      <a
        href='https://walink.co/aa4929'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={whatsapp} alt=''></img>
      </a>
      <p>Horario de atención</p>
      <p>Lunes a Viernes</p>
      <p>9:00 a 19:00</p>
    </div>
  );
}

export default WhatsApp;
