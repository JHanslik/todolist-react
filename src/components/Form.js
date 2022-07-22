import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Add new task" />
                <button type="submit"></button>
            </div>
        );
    }
}

export default Form;
