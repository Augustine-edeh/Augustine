import SectionContainer from "../components/ui/SectionWrapper";
import "react-toastify/dist/ReactToastify.css";
import CircularDots from "../components/ui/CircularDots";
import ContactForm from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <p className="font-bold text-gray-400">Get in Touch</p>

      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800 dark:text-gray-100 underline underline-offset-8 decoration-blue-500">
        Contact.
      </h2>

      <p className="text-gray-400">Drop me a line...</p>

      <ContactForm />
      <CircularDots numberOfDots={5} />
    </SectionContainer>
  );
};

export default Contact;
