import React from 'react';
import { useRoute } from 'wouter';
import { ArrowLeft, Calendar, Globe, Github } from 'lucide-react';
import { Link } from 'wouter';
import { getProjectById } from '../data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CodeBlock from '@/components/CodeBlock';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const ProjectDetail: React.FC = () => {
  const { toast } = useToast();
  const [, params] = useRoute('/project/:id');
  const projectId = params?.id;
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link href="/#projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">{project.title}</h1>
          
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {project.date}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  toast({
                    title: "Live Demo",
                    description: "Live demo will be available soon!",
                    duration: 3000,
                  });
                }}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Globe className="h-4 w-4" />
                Live Demo
              </button>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
              
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Key Features</h2>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {project.id === 'ecommerce-platform' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Implementation Highlights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Here's a glimpse of the authentication implementation:</p>
                  <CodeBlock 
                    title="auth.js" 
                    language="javascript"
                    code={`const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// User authentication middleware
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    
    if (!user) {
      throw new Error();
    }
    
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = { authenticateUser };`}
                  />
                </>
              )}
              
              {project.id === 'task-management' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Implementation Highlights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Here's how real-time updates are implemented:</p>
                  <CodeBlock 
                    title="firebaseConfig.js" 
                    language="javascript"
                    code={`import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);`}
                  />
                </>
              )}
              
              {project.id === 'web-data-harvester' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Implementation Highlights</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Here's a snippet of the web scraping functionality:</p>
                  <CodeBlock 
                    title="scraper.py" 
                    language="python"
                    code={`import requests
from bs4 import BeautifulSoup
import pandas as pd

class WebScraper:
    def __init__(self, url, selectors):
        self.url = url
        self.selectors = selectors
        self.results = []
        
    def fetch_page(self):
        """Fetch the HTML content of the page."""
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(self.url, headers=headers)
        if response.status_code == 200:
            return response.text
        else:
            raise Exception(f"Failed to fetch page: {response.status_code}")
    
    def parse_data(self, html):
        """Extract data using the provided CSS selectors."""
        soup = BeautifulSoup(html, 'html.parser')
        items = soup.select(self.selectors['container'])
        
        for item in items:
            data = {}
            for key, selector in self.selectors['fields'].items():
                element = item.select_one(selector)
                if element:
                    data[key] = element.text.strip()
                else:
                    data[key] = None
            self.results.append(data)
            
    def to_dataframe(self):
        """Convert the extracted data to a pandas DataFrame."""
        return pd.DataFrame(self.results)
    
    def export_csv(self, filename):
        """Export the data to a CSV file."""
        df = self.to_dataframe()
        df.to_csv(filename, index=False)
        return f"Data exported to {filename}"`}
                  />
                </>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-white dark:bg-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Project Links</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    toast({
                      title: "Live Demo",
                      description: "Live demo will be available soon!",
                      duration: 3000,
                    });
                  }}
                  className="flex items-center justify-between w-full p-3 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="font-medium">Live Demo</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-gray-800 dark:text-gray-200 mr-3" />
                    <span className="font-medium">Source Code</span>
                  </div>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;