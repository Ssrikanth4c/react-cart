import React from 'react';
import './App.css';
import ShoppingApp from './components/ShoppinApp'
import {BrowserRouter} from 'react-router-dom'


class App extends React.Component {
  render(){

    return (
      <div className="App">
        <BrowserRouter>
        <ShoppingApp />
        </BrowserRouter>

      </div>
  );
}
}

export default App;
