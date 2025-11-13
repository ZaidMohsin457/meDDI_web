import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import Features from './components/Features';
import Progress from './components/Progress';
import Impact from './components/Impact';
import Collaborators from './components/Collaborators';
import Team from './components/Team';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <Progress />
      <Impact />
      <Collaborators />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

