import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Check from './components/Check';
import Screen from './components/Screen';
import Subheader from './components/Subheader';
import Slottime from './components/Slottime';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          
          <div className="App-header">
            Book your show
            < Subheader />
          </div>
          <div className="split leftsplit">
              <h6>Slot time</h6>
              <Slottime />
              <h6>Place</h6>
              <Screen />
              <h6>Ammenties</h6>
              <Check />
          </div>
          <div className= "split rightsplit">
              <List />
          </div>
        </div>
      </div>
      
    );
  }
  
}

export default App;
