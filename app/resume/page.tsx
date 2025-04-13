'use client';

import Resume from '@/components/Resume';
import DownloadButton from '@/components/DownloadButton';
import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div id="resume">
        <Resume />
      </div>
      {isClient && <DownloadButton elementId="resume" />}
    </div>
  );
} 