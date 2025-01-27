const SectionContainer = ({ children, id }) => {
  return (
    <section
      id={id}
      className={`min-h-screen max-w-screen-lg px-8 pt-32 mx-auto bg-transparent`}

      //   contact
      //   className="min-h-screen max-w-screen-lg px-8 py-32 mx-auto text-white"
      //   className={className}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
