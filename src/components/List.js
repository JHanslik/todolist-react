import React from "react";

class List extends React.Component {
    render() {
        // console.log("list");
        // console.log(this.props.task);
        // console.log(this.props.status);
        return (
            <div>
                <p>{this.props.task}</p>
                <p>{this.props.status}</p>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={this.props.deleteTask}
                >
                    Delete Task
                </button>
            </div>
        );
    }
}

export default List;
