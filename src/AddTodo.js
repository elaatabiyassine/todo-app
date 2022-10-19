import { Component } from "react";

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })

    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Enter you todo : </label>
                    <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.content} />
                </form>
            </div>

        )

    }
}

export default AddTodo;