import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
    }
    addTask = (taskTodo) => {
        console.log(taskTodo);
        let clonedTasks = [...this.state.tasks];
        clonedTasks = [
            { description: taskTodo, status: "To do" },
            ...this.state.tasks,
        ];
        this.setState({
            tasks: clonedTasks,
        });
        deleteTask = () =>{

        }
    };
    render() {
        return (
            <div className="md:container">
                <div>
                    <h1 className="text-6xl text-center place-items-center">
                        To do List
                    </h1>
                </div>
                <Form addTask={this.addTask} />
                <List tasks={this.state.tasks} />
                <List deleteTask={this.deleteTask} />

            </div>
        );
    }
}
export default App;
