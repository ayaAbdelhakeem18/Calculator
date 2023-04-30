import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

      res:"",
      current:"",

    }

this.handleclick=this.handleclick.bind(this);
this.assign=this.assign.bind(this); 
this.del=this.del.bind(this); 
this.ac=this.ac.bind(this); 
}


handleclick(v) {
let element=v.toString();  
this.setState({current:this.state.current+element});
}

assign(){
return this.setState({res:eval(this.state.current)});
}
del(){
let state= (this.state.current).split("");
state.pop();
this.setState({current:state.join("")})
}
ac(){
this.setState({
  current:"",
  res:""
})
}
render() { 
  const buttons = ["/", 1, 2, 3, "*", 4, 5, 6,"+", 7, 8, 9, ".", 0, "-"];
  return (
      <div className="calculation-grid">
        <div className="output">
          <div className="previous-operand">{this.state.current}</div>
          <div className="current-operand">{this.state.res}</div>
        </div>
        <button className="span-two"  onClick={ this.ac}> AC </button>

        <button onClick={this.del}>DEL</button>

       {buttons.map((ele)=><button  onClick={()=>this.handleclick(ele) }  key={ele}>{ele}</button>)}

        <button className="span-two assign" onClick={this.assign}>=</button>
      </div>
  );
}
}
 
export default App;
