
import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor(props){
     super(props);
     this.state={
      date: new Date()
     };


   }

   componentDidMount(){
     let s = this;
     this.state.timer = setInterval(() => {
       s.setState({
        date: new Date()
       })
     
     }, 1000);
   }

   componentWillUnmount(){
     clearInterval(this.state.timer);
   }
  render() { 
    return ( 
      <div className="App">
        <h1>Digital Clock</h1>
        
          <div className="data" >
            <div style ={{padding: 20 }}>{this.state.date.getHours()} : <br /> Hours </div>
            <div style ={{padding: 20 }}> {this.state.date.getMinutes()} :<br /> Minutes </div>
            <div style ={{padding: 20}}> {this.state.date.getSeconds()} <br /> Seconds </div>
      
          </div>
          <div className="data1">
          <div style ={{padding: 8 }}> Year: {this.state.date.getUTCFullYear()}</div>
          <div style ={{padding: 8 }}> Month: {this.state.date.getUTCMonth()}</div>
          <div style ={{padding: 8 }}> Date: {this.state.date.getDate()}</div>
          </div>
         
        </div>

      
     );
  }
}
 
export default App;