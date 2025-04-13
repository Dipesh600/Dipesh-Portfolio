'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  elementId: string;
}

export default function DownloadButton({ elementId }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const element = document.getElementById(elementId);
      if (!element) return;

      // Dynamically import html2pdf
      const html2pdf = (await import("html2pdf.js")).default;

      const opt = {
        margin: 1,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { 
          unit: "in", 
          format: "letter", 
          orientation: "portrait" as const 
        },
      };

      await html2pdf.set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
    >
      <Download className="w-5 h-5 mr-2" />
      {isLoading ? "Generating PDF..." : "Download PDF"}
    </Button>
  );
} 