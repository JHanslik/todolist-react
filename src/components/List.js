import React from "react";

class List extends React.Component {
    render() {
        // console.log("list");
        // console.log(this.props.task);
        // console.log(this.props.status);
        return (
            <div className="line">
                {!this.props.editingStatus ? (
                    <div className="flex place-items-center">
                        <p className="flex-1 ml-5">{this.props.task}</p>
                        <p className="mx-10">{this.props.status}</p>
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 m-5 mr-0"
                            onClick={this.props.editTask}
                        >
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                            type="button"
                            className="focus:outline-none text-black bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5"
                            onClick={this.props.deleteTask}
                        >
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={this.props.validateEdit}>
                        <div className="flex place-items-center">
                            <input
                                className="flex-1 mx-5 block px-4 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                value={this.props.task}
                                onChange={this.props.handleTaskChange}
                            />
                            <select
                                name="status"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                                onChange={this.props.handleStatusChange}
                                required
                            >
                                <option value={this.props.status}>
                                    Select Status
                                </option>
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                            <button
                                type="submit"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-5"
                            >
                                <i class="bi bi-check-square-fill"></i>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default List;
