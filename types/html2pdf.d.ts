declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number;
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      letterRendering?: boolean;
    };
    jsPDF?: {
      unit?: string;
      format?: string | number[];
      orientation?: 'portrait' | 'landscape';
    };
  }

  interface Html2PdfInstance {
    from: (element: HTMLElement) => Html2PdfInstance;
    set: (options: Html2PdfOptions) => Html2PdfInstance;
    save: () => Promise<void>;
  }

  const html2pdf: Html2PdfInstance;
  export default html2pdf;
} 