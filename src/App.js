import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thumbnail from './Thumbnail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Thumbnail />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
