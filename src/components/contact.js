import Form from "./contact/form";
import WhatsApp from "./contact/whatsapp";
import "../static/styles/components/contact.less";

function Contact() {
  return (
    <div id='contact'>
      <WhatsApp />
      <Form />
    </div>
  );
}

export default Contact;
