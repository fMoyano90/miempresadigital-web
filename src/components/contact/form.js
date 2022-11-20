import "../../static/styles/components/contact/form.less";

function Form() {
  return (
    <div id='form'>
      <h3>Nos importan tus ideas</h3>
      <p>En menos de 48 horas nos pondremos en contacto</p>
      <form>
        <div>
          <label>Nombre de requiriente</label>
          <input></input>
        </div>
        <div>
          <label>Cargo en la empresa</label>
          <input></input>
        </div>
        <div>
          <label>Télefono de contacto</label>
          <input></input>
        </div>
        <div>
          <label>Correo electrónico</label>
          <input></input>
        </div>
        <div>
          <label>Cantidad de empleados</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label>Descipción del proyecto</label>
          <textarea />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
