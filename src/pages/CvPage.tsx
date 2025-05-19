import CvHeader from "../components/cv/CvHeader";

const CVPage = () => {
  const cvLink =
    "https://docs.google.com/document/d/1hVEjMe3XtP3ButrVE1O6zT_RvLDG3Co3qczkB_7KTuE/edit?usp=sharing";

  const downloadLink =
    "https://docs.google.com/document/d/1hVEjMe3XtP3ButrVE1O6zT_RvLDG3Co3qczkB_7KTuE/export?format=pdf";

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-6 flex flex-col items-center">
      <CvHeader />

      {/* Mobile message */}
      <div className="flex-1 flex flex-col gap-5 justify-center items-center lg:hidden text-center text-gray-300 max-w-md">
        <p className="text-lg">
          For a better viewing experience, please use a larger screen or
          download the CV below.
        </p>

        <a
          href={downloadLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          Download CV (PDF)
        </a>
      </div>

      {/* Desktop iFrame */}
      <div className="hidden lg:block w-full max-w-5xl h-[85vh] mt-6 rounded-md overflow-hidden shadow-lg">
        <iframe
          src={cvLink}
          title="Augustine's CV"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default CVPage;
