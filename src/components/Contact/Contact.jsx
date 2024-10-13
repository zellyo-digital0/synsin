import ContactTitle from "./ContactTitle";
import contactBg from "../../assets/images/contact-bg.jpg";
import ContactForm from "./ContactForm";
import Container from "../Shared/Container";

const Contact = () => {
  return (
    <section
      className="py-10 lg:py-16 bg-no-repeat bg-cover bg-bottom min-h-[600px] lg:min-h-[717px]"
      style={{ backgroundImage: `url(${contactBg})` }}
      id="contact"
    >
      <Container>
        <ContactTitle />
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
