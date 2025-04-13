'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2pdf from 'html2pdf.js';

const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.getElementById('resume');
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Happy_Swaraj_Resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
    >
      <Download className="w-5 h-5 mr-2" />
      Download CV
    </Button>
  );
};

export default DownloadButton; 