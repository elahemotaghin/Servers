import Root from "./Components/Root";
import React from "react";
import {BrowserRouter} from "react-router-dom";
// import './assets/sass/reset.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
