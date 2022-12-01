import React, { useState, useEffect } from "react";
import { createQuotation } from "../../helpers/quotations";
import {
  sendEmailContactClient,
  sendEmailContactAdmin,
} from "../../helpers/notifications";
import validate from "../../utils/validateContactForm";
import Swal from "sweetalert2";
import "../../static/styles/components/contact/form.less";

function Form() {
  const [formState, setFormState] = useState({
    requesting: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    project: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const successModal = () => {
    Swal.fire({
      icon: "success",
      title: "Hemos recibido tu solicitud",
      text: "Pronto nos pondremos en contacto",
      confirmButtonText: "OK",
      confirmButtonColor: "#000",
      customClass: {
        confirmButton: "swal-confirm-button",
      },
      buttonsStyling: false,
    });
  };
  const errorModal = () => {
    Swal.fire({
      icon: "error",
      title: "...Ups",
      text: "Hubo un error, por favor intenta más tarde",
      confirmButtonText: "OK",
      confirmButtonColor: "#000",
      customClass: {
        confirmButton: "swal-confirm-button",
      },
      buttonsStyling: false,
    });
  };

  const handleChange = (event) => {
    setFormState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(validate(formState));
    setIsSubmit(true);
  };

  const cleanForm = () => {
    setFormState({
      requesting: "",
      position: "",
      company: "",
      phone: "",
      email: "",
      project: "",
    });
  };

  const sendForm = async () => {
    const isQuotationSaved = await createQuotation(formState);
    if (isQuotationSaved) {
      await sendEmailContactClient(formState);
      await sendEmailContactAdmin(formState);

      successModal();
    } else {
      errorModal();
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendForm();
      cleanForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <div id='form'>
      <h3>Nos importan tus ideas</h3>
      <p>En menos de 48 horas nos pondremos en contacto</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de requirente</label>
          <input
            type='text'
            name='requesting'
            value={formState.requesting}
            onChange={handleChange}
          />
          <span>{formErrors.requesting}</span>
        </div>
        <div>
          <label>Cargo en la empresa</label>
          <input
            type='text'
            name='position'
            value={formState.position}
            onChange={handleChange}
          />
          <span>{formErrors.position}</span>
        </div>
        <div>
          <label>Nombre de la empresa</label>
          <input
            type='text'
            name='company'
            value={formState.company}
            onChange={handleChange}
          />
          <span>{formErrors.company}</span>
        </div>
        <div>
          <label>Teléfono de contacto</label>
          <input
            type='phone'
            name='phone'
            value={formState.phone}
            onChange={handleChange}
          />
          <span>{formErrors.phone}</span>
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
          />
          <span>{formErrors.email}</span>
        </div>
        <div>
          <label>Descripción del proyecto</label>
          <textarea
            type='text'
            name='project'
            value={formState.project}
            onChange={handleChange}
          />
          <span>{formErrors.project}</span>
        </div>
        <button type='submit'>ENVIAR</button>
      </form>
    </div>
  );
}

export default Form;
