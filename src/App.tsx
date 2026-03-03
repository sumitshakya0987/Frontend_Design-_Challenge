import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ScanDetailPage from './pages/ScanDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<PlaceholderPage title="Projects" description="Manage your security initiatives and asset groups here. Track progress across multiple infrastructure environments." />} />
            <Route path="/scans" element={<ScanDetailPage />} />
            <Route path="/schedule" element={<PlaceholderPage title="Schedule" description="Automate your scanning routines. Set up recurring security audits for your cloud and on-premise assets." />} />
            <Route path="/notifications" element={<PlaceholderPage title="Notifications" description="Stay updated with real-time alerts. Get instant feedback on scan completions or critical vulnerability detections." />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" description="Configure your global application preferences, API keys, and enterprise team permissions." />} />
            <Route path="/support" element={<PlaceholderPage title="Support" description="Access our professional security assistance and documentation. We are here to help you secure your infrastructure." />} />
            <Route path="/scan/:id" element={<ScanDetailPage />} />
            <Route path="/" element={<Navigate to="/signup" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
