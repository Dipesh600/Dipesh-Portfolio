'use client';

import Resume from '@/components/Resume';
import DownloadButton from '@/components/DownloadButton';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Resume />
      <DownloadButton />
    </div>
  );
} 