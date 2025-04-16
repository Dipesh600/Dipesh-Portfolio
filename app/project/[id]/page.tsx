'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetails() {
  const params = useParams(
    
  );
  const project = projects.find(p => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-600 flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-500 hover:text-blue-600 flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 