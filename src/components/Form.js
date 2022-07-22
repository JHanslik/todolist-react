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
    handleSubmit = () => {
        this.props.addTask(this.state.task);
        this.setState({
            task: "",
        });
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Add new task"
                    onChange={this.handleTaskDescriptionChange}
                />
                <button type="submit" onSubmit={this.handleSubmit}></button>
            </div>
        );
    }
}

export default Form;
