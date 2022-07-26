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
        e.target.firstChild.firstChild.value = "";
    };
    render() {
        return (
            <div className="flex relative block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg rounded-b-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                <form className="flex-1" onSubmit={this.handleSubmit}>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Add new task"
                            onChange={this.handleTaskDescriptionChange}
                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg rounded-r-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-l-none text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
                <select
                    name="filter"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                    onChange={this.props.taskFilter}
                >
                    <option value="All">All</option>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        );
    }
}

export default Form;
