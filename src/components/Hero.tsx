const Hero = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-slate-900">
      <section className="text-white">
        <h3>Hi there, 👋</h3>
        <div>
          <p>I'm Augustine Edeh,</p>
          <p>
            an Advancing frontend developer and Aspiring fullstack developer
          </p>
        </div>
      </section>

      <section className="">
        <div className="p-0 container h-fit w-56 bg-red-500">
          <img
            src={"https://xsgames.co/randomusers/assets/avatars/male/74.jpg"}
            alt="Augustine"
            className="p-0 h"
          />
        </div>
        <div className="w-56 bg-slate-600"></div>
      </section>
    </div>
  );
};

export default Hero;
