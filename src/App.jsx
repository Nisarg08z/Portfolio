import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Landing from './Landing';
import ProjectDetail from './pages/ProjectDetail';
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#2d2d2d',
            color: '#fff',
          },
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}
