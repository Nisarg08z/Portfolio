import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import PartitionAnimation from './components/PartitionAnimation'
import SkillsPage from './pages/SkillsPage';

export default function App() {
  return (
    <Layout>
      < Home />
      < PartitionAnimation />
      < SkillsPage />

    </Layout>
  );
}
