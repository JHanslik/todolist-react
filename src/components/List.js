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
            </div>
        );
    }
}

export default List;
