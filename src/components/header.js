import '../static/styles/components/header.less';
import logo from '../static/img/logo-bg-black.png';

function Header() {
    return (
      <div id='header'>
        <div className='pre-header'>
          <p>contacto@miempresadigital.cl</p>
          <p>Yerbas Buenas #153, Los Andes</p>
          <p>+569 3574 5548</p>
        </div>
        <div className='menu'>
          <img src={logo} alt=''/>
        </div>
      </div>
    );
  }
  
  export default Header;
  