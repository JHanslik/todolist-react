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
        let clonedTasks = [...this.state.tasks];
        clonedTasks = [
            { description: taskTodo, status: "To do" },
            ...this.state.tasks,
        ];
        this.setState({
            tasks: clonedTasks,
        });
    };
    deleteTask = (task) => {
        const clonedTasks = [...this.state.tasks];
        const index = clonedTasks.indexOf(task);
        clonedTasks.splice(index, 1);
        this.setState({
            tasks: clonedTasks,
        });
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
                {this.state.tasks.map((task) => {
                    return (
                        <List
                            task={task.description}
                            status={task.status}
                            deleteTask={() => {
                                this.deleteTask(task);
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}
export default App;
