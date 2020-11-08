import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Students from './components/Students';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component = {Home} />
        <Route path="/all-students" component = {Students} />
      </div>
    </Router>
  );
}

export default App;
