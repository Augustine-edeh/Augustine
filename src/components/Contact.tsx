const Contact = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen bg-slate-900 text-white px-5">
        <h2 className="text-4xl mt-28 mb-3 font-extrabold">Contact Me</h2>

        <p>Do well to drop me a line...</p>

        <form className="flex flex-col  gap-y-8 my-10">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="font-bold w-fit">
              Enter your email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="exampla@email.com"
              required
              className="text-black p-4 rounded-md outline-none border-b-4 border-white focus:border-blue-500 shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="message" className="font-bold w-fit">
              Enter your Message
            </label>
            <textarea
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="text-black p-4 rounded-md outline-none border-b-4 border-white focus:border-blue-500 shadow-lg"
              required
            ></textarea>
          </div>
          <button className="bg-blue-500 px-5 py-3 ml-auto w-fit font-bold">
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
