const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 lg:flex-row  justify-center items-center bg-slate-900">
      <section className="text-white text-center">
        <h3 className="text-2xl">Hello 👋, I'm</h3>
        <div>
          <p className="text-3xl"> Augustine Edeh</p>
          <p className="p-0  mt-8 text-xl">
            an{" "}
            <span className="text-teal-500">Advancing frontend developer</span>{" "}
            & <span className="text-teal-500">a fullstack developer</span> in
            the making (self tught)
          </p>
        </div>
      </section>

      <section className="flex place-content-center h-56 bg-blue-40">
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
