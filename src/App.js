import React, {Component} from 'react';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Navbar from './components/navbar/navbar';
import bgimage7 from './bgimage7.jpg';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import cart from './components/config/cart/cart';

var sectionStyle = {
  backgroundImage: `url(${bgimage7})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" 
          render = { () => {
            return (
              <div style = {sectionStyle}>
                <Navbar />
                <Dashboard />
                <div>
                    <footer className="footer mt-auto py-4 bg-dark">
                    <div className="container">
                        <span className="text-muted text-right"><h6>&#169;Copyright: TShirtDesign</h6></span>
                    </div>
                    </footer>
                </div>
                </div>
            )
          }}
        />
        <Route exact path="/cart" component={cart} />
      </Router>
    );
  }
}

export default App;
