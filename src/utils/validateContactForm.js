const validateContactForm = (values) => {
  const errors = {};
  const emailFormatRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onlyNumbersRegex = /^[0-9]/i;
  const onlyLetters = /^[A-Za-z\s]*$/;

  if (!values.requesting) {
    errors.requesting = "El requirente es necesario";
  } else if (!onlyLetters.test(values.requesting)) {
    errors.requesting = "Escribe un nombre valido";
  }
  if (!values.position) {
    errors.position = "La posición en empresa es necesaria";
  }
  if (!values.company) {
    errors.company = "El nombre de la empresa es necesario";
  }
  if (!values.phone) {
    errors.phone = "El teléfono de contacto es necesario";
  } else if (!onlyNumbersRegex.test(values.phone)) {
    errors.phone = "El teléfono solo puede tener números";
  } else if (values.phone.length !== 9) {
    errors.phone = "El teléfono debe tener 9 dígitos";
  }
  if (!values.email) {
    errors.email = "El email es necesario";
  } else if (!emailFormatRegex.test(values.email)) {
    errors.email = "Escribe un email valido";
  }

  if (!values.project) {
    errors.project = "Necesitamos una breve idea del proyecto";
  }
  return errors;
};

export default validateContactForm;
