import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';
import Card from '../components/Card/Card';

const projects = [
  {
    title: 'Instagram Unfollower',
    description: 'A Cypress test that logs into Instagram and unfollows all users',
    imageUrl: 'data:image/jpeg;base64,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',
    link: 'https://github.com/paladini-qa/instagram-unfollow-cypress'
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
      <h1 className='Title'>Projects</h1>
        <div className="Gallery">
          <Card 
          title={projects[0].title}  
          imageUrl={projects[0].imageUrl}
          link={projects[0].link} 
          />
        </div>
      <Footer />
    </>
  );
};

export default Projects;