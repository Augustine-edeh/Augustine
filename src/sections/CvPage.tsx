import CvHeader from "../components/cv/CvHeader";

const CVPage = () => {
  const cvLink =
    "https://docs.google.com/document/d/1hVEjMe3XtP3ButrVE1O6zT_RvLDG3Co3qczkB_7KTuE/edit?usp=sharing";

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-6 flex flex-col items-center">
      <CvHeader />

      <div className="w-full max-w-5xl h-[85vh] rounded-md overflow-hidden shadow-lg">
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
