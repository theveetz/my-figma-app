import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thumbnail from './Thumbnail'; // Your main component
import './styles.css'; // Import your CSS for styling

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Thumbnail} />
      </Switch>
    </Router>
  );
}

export default App;
