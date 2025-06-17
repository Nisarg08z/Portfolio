import React from 'react';
import Home from './pages/Home';
import PartitionAnimation from './components/PartitionAnimation'
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage.jsx'

export default function Landing() {
  return (
    <div>
      < Home />
      < PartitionAnimation />
      < SkillsPage />
      < ProjectsPage />
    </div>
  );
}
