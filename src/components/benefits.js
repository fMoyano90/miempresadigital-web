import "../static/styles/components/benefits.less";
import alwaysOpen from "../static/img/247.png";

function Benefits() {
  return (
    <div id='benefits'>
      <div className='benefits-title'>
        <h1>Únete a la era digital</h1>
        <h2>Comienza el camino hacia nuevos horizontes</h2>
      </div>
      <div className='benefit'>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
        <div className='benefit-text'>
          <div className='title'>1. Manten tu negocio abierto 24/7</div>
          <div className='description'>
            Desde internet puedes mantener tu negocio abierto a toda hora, todos
            los días del año, incluso mientras tú y tus trabajadores duermen.
          </div>
        </div>
      </div>
      <div className='benefit'>
        <div className='benefit-text'>
          <div className='title'>2. Rompe los limites geograficos</div>
          <div className='description'>
            Lleva tus productos o servicios a otros lugares y obten la
            posibilidad de expandir tu negocio.
          </div>
        </div>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
      </div>
      <div className='benefit'>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
        <div className='benefit-text'>
          <div className='title'>3. Llega a nuevos clientes</div>
          <div className='description'>
            Miles de personas estan ahora mismo en internet, muchos de ellos
            podrian estar buscando tus productos o servicios.
          </div>
        </div>
      </div>
      <div className='benefit'>
        <div className='benefit-text'>
          <div className='title'>4. Recibe pagos desde tu web o app móvil</div>
          <div className='description'>
            Recibe los pagos de las compras de tus productos o servicios
            directamente en tu cuenta corriente.
          </div>
        </div>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
      </div>
      <div className='benefit'>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
        <div className='benefit-text'>
          <div className='title'>5. Automatiza los procesos</div>
          <div className='description'>
            Agenda los servicios que ofreces, lleva el control de los pedidos,
            notifica a tus clientes, las opciones son ilimitadas, crea lo que
            necesite tu empresa.
          </div>
        </div>
      </div>
      <div className='benefit'>
        <div className='benefit-text'>
          <div className='title'>6. Mejora continuamente</div>
          <div className='description'>
            Comienza a la medida que necesitas, siempre podrás ir mejorando tus
            productos de forma progresiva.
          </div>
        </div>
        <div className='benefit-img'>
          <img src={alwaysOpen} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
