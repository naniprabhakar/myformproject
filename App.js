// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React,{Component}from "react";

import "./App.css";
import Form from "./form";

class App extends Component{
    state={
        fields:{}
    };
    onChange =updatedValue =>{
        this.setState({
            fields:{
                ...this.state.fields,
                ...updatedValue
            }
             
    });
};

    render(){
        return(
            <div className="App">
                <Form onChange={fields=>this.onChange(fields)}/>
                <p>{JSON.stringify(this.state.fields,null,2)}</p>
            </div>
        );
    }
}
export default App;
