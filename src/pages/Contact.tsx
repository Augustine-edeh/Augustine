import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement functionality to send the form data here.
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen max-w-screen-md px-8 mx-auto text-white"
    >
      <p className="font-bold text-gray-400">Get in Touch</p>

      <h2 className="text-3xl font-bold mt-5 mb-2 text-gray-800 dark:text-gray-100 underline underline-offset-8 decoration-blue-500">
        Contact.
      </h2>

      <p className="text-gray-400">drop me a line...</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-8 mt-10 mb-5"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name" className="font-bold w-fit">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-slate-800 text-white p-4 rounded-lg outline-none border-l-4  border-slate-800 focus:border-blue-500 shadow-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="font-bold w-fit">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exampla@email.com"
            required
            className="bg-slate-800 text-white p-4 rounded-lg outline-none border-l-4  border-slate-800 focus:border-blue-500 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="message" className="font-bold w-fit">
            Your Message
          </label>
          <textarea
            id="message"
            cols={30}
            rows={10}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Kindly enter your message"
            className="bg-slate-800 text-white p-4 rounded-lg outline-none border-l-4 border-slate-800 focus:border-blue-500 shadow-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center bg-blue-500 px-5 py-3 ml-auto w-fit font-bold rounded-lg shadow-lg"
        >
          Send
          <FontAwesomeIcon icon={faPaperPlane} size="lg" className="ml-3" />
        </button>
      </form>

      <div>
        <ul className="flex justify-evenly mb-32">
          <li className="bg-slate-800/40 h-8 w-8 rounded-full"></li>
          <li className="bg-slate-800/40 h-8 w-8 rounded-full"></li>
          <li className="bg-slate-800/40 h-8 w-8 rounded-full"></li>
          <li className="bg-slate-800/40 h-8 w-8 rounded-full"></li>
          <li className="bg-slate-800/40 h-8 w-8 rounded-full"></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
