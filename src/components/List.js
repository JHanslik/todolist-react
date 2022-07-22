import React from "react";

class List extends React.Component {
    render() {
        // console.log("list");
        // console.log(this.props.task);
        // console.log(this.props.status);
        return (
            <div className="flex place-items-center">
                <p className="flex-1 ml-5">{this.props.task}</p>
                <p className="mx-10">{this.props.status}</p>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5 mr-0"
                    onClick={this.props.deleteTask}
                >
                    Delete Task
                </button>
            </div>
        );
    }
}

export default List;
