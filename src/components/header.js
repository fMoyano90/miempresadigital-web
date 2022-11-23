import "../static/styles/components/header.less";
import logo from "../static/img/logo.png";

function Header() {
  return (
    <div id='header'>
      <div className='pre-header'>
        <a href='mailto: contacto@miempresadigital.cl'>
          <p>contacto@miempresadigital.cl</p>
        </a>
        <a
          href='https://walink.co/aa4929'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>+569 3574 5548</p>
        </a>
      </div>
      <div className='menu'>
        <img src={logo} alt='' />
      </div>
    </div>
  );
}

export default Header;
