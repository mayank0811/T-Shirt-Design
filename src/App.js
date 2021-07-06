import React, {Component} from 'react';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Navbar from './components/navbar/navbar';
//import bgimage from './bgimage.jpg';
import bgimage3 from './bgimage3.jpg';
//import bgimage3 from './bgimage.jpg';

var sectionStyle = {
  backgroundImage: `url(${bgimage3})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

class App extends Component {
  render() {
    return (
      <div style = {sectionStyle}>
      <Navbar />
      <Dashboard />
      </div>
    );
  }
}

export default App;
