import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

export default class Apptodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo: 'ReactJs',
        };
    }

    // call api khi component được gắn vào DOM
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => this.setState({ todos: json }));
    }

    // xử lý khi người dùng nhập vào input
    handleChange = (event) => {
        this.setState({ todo: event.target.value });
    };

    // xử lý khi người dùng submit form
    handleAddTodo = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            todos: [...prevState.todos, { title: prevState.todo }],
            todo: '',
        }));
    };

    render() {
        return (
            <>
                <Header />
                <Contents
                    todos={this.state.todos}
                    todo={this.state.todo}
                    onChange={this.handleChange}
                    onAddTodo={this.handleAddTodo}
                />
                <Footer />
            </>
        );
    }
}