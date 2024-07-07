import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'; // Example component
import AboutPage from './AboutPage'; // Example component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
