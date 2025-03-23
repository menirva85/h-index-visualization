import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import HIndexPage from './HIndexPage';
import DetailsPage from './DetailsPage';

const navContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap', // Allows wrapping on small screens
  justifyContent: 'center',
  gap: '1rem',
  backgroundColor: '#f0f0f0',
  padding: '1rem',
};

const linkStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  textDecoration: 'none',
  backgroundColor: '#ffffff',
  color: '#333333',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const activeLinkStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#ffffff',
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={navContainerStyle}>
        <NavLink
          to="/h-index-visualization"
          end
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Individual Effort H-Index Visual
        </NavLink>

        <NavLink
          to="/h-index-visualization/details"
          end
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Individual Effort Details
        </NavLink>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          {/* Redirect "/" to "/h-index-visualization" */}
          <Route
            path="/"
            element={<Navigate to="/h-index-visualization" replace />}
          />
          <Route path="/h-index-visualization" element={<HIndexPage />} />
          <Route
            path="/h-index-visualization/details"
            element={<DetailsPage />}
          />
          {/* Catch-all route */}
          <Route
            path="*"
            element={<Navigate to="/h-index-visualization" replace />}
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
