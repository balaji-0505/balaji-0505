import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar'; // Import the MenuBar component
import Home from './pages/Home';  // Import the Home page
import About from './pages/About'; // Import the About page
import Services from './pages/Services'; // Import the Services page
import Contact from './pages/Contact'; // Import the Contact page

const App = () => {
  return (
    <Router>
      <div className="App">
        <MenuBar /> {/* This will render the MenuBar on every page */}
        <Switch>
          {/* Define routes for each page */}
          <Route path="/" exact component={Home} /> {/* Home page */}
          <Route path="/about" component={About} /> {/* About page */}
          <Route path="/services" component={Services} /> {/* Services page */}
          <Route path="/contact" component={Contact} /> {/* Contact page */}
        </Switch>
      </div>
    </Router>
  );
};
