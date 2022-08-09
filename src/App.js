import Root from "./Components/sharedComponents/Root";
import React from "react";
import {BrowserRouter} from "react-router-dom";

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
