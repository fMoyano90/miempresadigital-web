import React, { useState } from "react";
import Swal from 'sweetalert2'
import "../../static/styles/components/contact/form.less";

function Form() {
  const [formState, setFormState] = useState({
    requesting: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    proyect: "",
  });

  const handleChange = (event) => {
    setFormState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send state to server
    // send notification email
    Swal.fire({
      icon: 'success',
      title: 'Hemos recibido tu solicitud',
      text: 'Pronto nos pondremos en contacto',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000',
      customClass: {
        confirmButton: 'swal-confirm-button',
      },
      buttonsStyling: false
    })
    // add modal alert in case of error
  }

  return (
    <div id='form'>
      <h3>Nos importan tus ideas</h3>
      <p>En menos de 48 horas nos pondremos en contacto</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de requiriente</label>
          <input type="text" name="requesting" value={formState.requesting} onChange={handleChange} />
        </div>
        <div>
          <label>Cargo en la empresa</label>
          <input type="text" name="position" value={formState.position} onChange={handleChange} />
        </div>
        <div>
          <label>Nombre de la empresa</label>
          <input type="text" name="company" value={formState.company} onChange={handleChange} />
        </div>
        <div>
          <label>Télefono de contacto</label>
          <input type="text" name="phone" value={formState.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input type="text" name="email" value={formState.email} onChange={handleChange} />
        </div>
        <div>
          <label>Descipción del proyecto</label>
          <textarea type="text" name="proyect" value={formState.proyect} onChange={handleChange} />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Form;
