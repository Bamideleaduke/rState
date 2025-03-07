import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import ActivityPage from "./pages/ActivityPage";

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-500">
    {title} Page
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Placeholder title="Home" />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/discover" element={<Placeholder title="Discover" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
