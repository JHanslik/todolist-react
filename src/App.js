import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            tasks: []
        }
    }
    addTask = (taskTodo)=>{

console.log(taskTodo)
    }
    render() {
        return (
            <>
            <div>
                <h1 className="text-3xl text-purple-400">Hello world!</h1>
            </div>
            <Form addTask={this.state.addTask}/>
            </>
        );
    }
}
export default App;
