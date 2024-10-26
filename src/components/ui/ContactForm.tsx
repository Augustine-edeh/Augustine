import { useState, FormEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const emailJsInfo = {
    serviceId: import.meta.env.VITE_SERVICE_ID,
    publicKey: import.meta.env.VITE_PUBLIC_KEY,
    templateId: import.meta.env.VITE_TEMPLATE_ID,
  };

  const [isSending, setIsSending] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const notify = {
    success: () =>
      toast.success("Message sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }),
    error: () =>
      toast.error("Error. Message not sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }),
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    emailjs
      .sendForm(emailJsInfo.serviceId, emailJsInfo.templateId, form.current, {
        publicKey: emailJsInfo.publicKey,
      })
      .then(
        () => {
          if (form.current) {
            form.current.reset(); // Clear form inputs after submission
          }
          console.log("SUCCESS!");
          setIsSending(false);
          notify.success();
        },
        (error) => {
          console.log("FAILED...", error.message);
          setIsSending(false);
          notify.error();
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-y-8 mt-10 mb-5"
    >
      <ToastContainer />

      {/* Name input */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name" className="font-bold w-fit dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="What's your name?"
          className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded-lg outline-none border-l-4 border-white dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 shadow-lg"
          required
        />
      </div>

      {/* Email input */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="font-bold w-fit dark:text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="example@email.com"
          required
          className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded-lg outline-none border-l-4 border-white dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 shadow-lg"
        />
      </div>

      {/* Message textarea */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="message" className="font-bold w-fit dark:text-white">
          Your Message
        </label>
        <textarea
          id="message"
          cols={30}
          rows={10}
          name="message"
          placeholder="Kindly enter your message"
          className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded-lg outline-none border-l-4 border-white dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 shadow-lg"
          required
        ></textarea>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="flex justify-center items-center bg-blue-500 px-5 py-3 ml-auto w-fit font-bold rounded-lg shadow-lg text-white"
      >
        {isSending ? (
          "Sending..."
        ) : (
          <>
            Send
            <FontAwesomeIcon icon={faPaperPlane} size="lg" className="ml-3" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
