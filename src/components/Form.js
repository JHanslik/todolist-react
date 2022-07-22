import React from "react";

class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            task: "",
        };
    }

    handleTaskDescriptionChange = (e) => {
        this.setState({
            task: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: "",
        });
        e.target.firstChild.value = "";
    };
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add new task"
                        onChange={this.handleTaskDescriptionChange}
                    />
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
