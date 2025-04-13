'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { certificates } from '@/data/certificates';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${
        isVisible ? "section-animate-active" : "section-animate"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Professional certifications I've earned to validate my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={certificate.imageUrl} 
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    {certificate.organization}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <a 
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(certificate.credentialUrl, "_blank");
                  }}
                >
                  View Credential <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;