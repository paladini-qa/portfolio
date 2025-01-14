import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    imageUrl: 'path/to/image1.jpg'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    imageUrl: 'path/to/image2.jpg'
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    imageUrl: 'path/to/image3.jpg'
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <h2>Projects</h2>
      <div className="projects">
        <div className="gallery">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <img src={project.imageUrl} alt={project.title} className="gallery-image" />
              <h3 className="gallery-title">{project.title}</h3>
              <p className="gallery-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;