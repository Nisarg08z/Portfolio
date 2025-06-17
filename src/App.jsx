import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Landing from './Landing';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Layout>
  );
}
