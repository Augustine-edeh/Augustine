const Hero = () => {
  return (
    <div className="flex flex-col h-screen place-content-center bg-slate-900">
      <section className="text-white text-center">
        <h3>Hi there 👋,</h3>
        <div>
          <p>I'm Augustine Edeh,</p>
          <p>
            an Advancing frontend developer and Aspiring fullstack developer
          </p>
        </div>
      </section>

      <section className="flex place-content-center h-56 bg-blue-40 mt-20">
        <div className="container h-full w-56 bg-yellow-500 rounded-lg overflow-clip z-10 shadow-lg">
          <img
            src={"https://xsgames.co/randomusers/assets/avatars/male/74.jpg"}
            alt="Augustine"
            className="h"
          />
        </div>
        <div className="h-full w-56 h bg-slate-800 rounded-lg -ml-44 mt-8"></div>
      </section>
    </div>
  );
};

export default Hero;
