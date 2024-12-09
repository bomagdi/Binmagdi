"use client";

import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = "/hero/cv/CV.pdf"; // Path to your CV in the public folder
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "CV.pdf"; // Suggested filename
    anchor.click();
  };

  return (
    <Button variant="secondary" className="gap-x-2" onClick={handleDownload}>
      Download CV <Download size={18} />
    </Button>
  );
};

export default DownloadButton;
