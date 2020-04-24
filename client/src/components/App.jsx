import React, {Component} from 'react';
import logo from "../images/Team.png";

class App extends Component{
    render(){
        return(
        <div>
            <h1>My React App!</h1>
            <img src={logo} />
            <div className=""></div>
        </div>
        );
    }
}

export default App;