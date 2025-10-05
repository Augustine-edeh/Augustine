"use client";

import { useState } from "react";
import CvHeader from "../components/cv/CvHeader";

const CVPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cvFile = "/Augustine Edeh – Frontend Developer.pdf";

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-6 flex flex-col items-center">
      <CvHeader />

      {/* PDF Viewer for all screens */}
      <div className="w-full max-w-5xl h-[80vh] sm:h-[85vh] mt-6 rounded-xl overflow-hidden shadow-lg bg-slate-800 relative">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
            Loading CV...
          </div>
        )}

        <iframe
          src={cvFile}
          title="Augustine Edeh's CV"
          className={`w-full h-full border-0 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>
    </div>
  );
};

export default CVPage;
