import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            copyTasks: [],
        };
    }
    addTask = (taskTodo) => {
        let clonedTasks = [...this.state.tasks];
        clonedTasks = [
            { description: taskTodo, status: "To do", editing: false },
            ...this.state.tasks,
        ];
        this.setState({
            tasks: clonedTasks,
            copyTasks: clonedTasks,
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

    editTask = (task) => {
        const clonedTasks = [...this.state.tasks];
        const index = clonedTasks.indexOf(task);
        clonedTasks[index].editing = true;
        this.setState({
            tasks: clonedTasks,
        });
    };
    handleTaskChange = (e, task) => {
        const clonedTasks = [...this.state.tasks];
        const index = clonedTasks.indexOf(task);
        clonedTasks[index].description = e.target.value;
        this.setState({
            tasks: clonedTasks,
            copyTasks: clonedTasks,
        });
    };
    handleStatusChange = (e, task) => {
        const clonedTasks = [...this.state.tasks];
        const index = clonedTasks.indexOf(task);
        clonedTasks[index].status = e.target.value;
        this.setState({
            tasks: clonedTasks,
            copyTasks: clonedTasks,
        });
    };

    validateEdit = (task) => {
        const clonedTasks = [...this.state.tasks];
        const index = clonedTasks.indexOf(task);
        clonedTasks[index].editing = false;
        this.setState({
            tasks: clonedTasks,
            copyTasks: clonedTasks,
        });
    };

    taskFilter = (e) => {
        this.setState(
            {
                tasks: this.state.copyTasks,
            },
            () => {
                const clonedTasks = [...this.state.tasks];
                let filteredTasks = clonedTasks.filter((task) => {
                    return task.status === e.target.value;
                });
                e.target.value !== "All"
                    ? this.setState({
                          tasks: filteredTasks,
                      })
                    : this.setState({
                          tasks: clonedTasks,
                      });
            }
        );
    };

    render() {
        console.log(this.state.tasks);
        return (
            <div className="md:container">
                <div>
                    <h1 className="text-6xl text-center place-items-center m-10">
                        To do List
                    </h1>
                </div>
                <Form
                    addTask={this.addTask}
                    taskFilter={(e) => {
                        this.taskFilter(e);
                    }}
                />
                {this.state.tasks.map((task) => {
                    return (
                        <List
                            task={task.description}
                            status={task.status}
                            editingStatus={task.editing}
                            deleteTask={() => {
                                this.deleteTask(task);
                            }}
                            editTask={() => {
                                this.editTask(task);
                            }}
                            handleTaskChange={(e) => {
                                this.handleTaskChange(e, task);
                            }}
                            handleStatusChange={(e) => {
                                this.handleStatusChange(e, task);
                            }}
                            validateEdit={() => {
                                this.validateEdit(task);
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}
export default App;
