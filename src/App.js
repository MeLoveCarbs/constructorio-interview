import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Contributions } from './Contributions';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign:"left"}}>
        <Contributions/>
      </div>
    );
  }
}
