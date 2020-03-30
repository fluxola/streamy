import React, { Component } from 'react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Chatroom from './components/Chatroom/Chatroom';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Chatroom />
        <Footer />
      </div>
    );
  }
}

export default App;
