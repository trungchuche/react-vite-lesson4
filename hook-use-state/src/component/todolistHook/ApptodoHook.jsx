import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default class ApptodoHook extends Component {
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
                <TodoForm
                    todo={this.state.todo}
                    onChange={this.handleChange}
                    onAddTodo={this.handleAddTodo}
                />
                <TodoList todos={this.state.todos} />
                <Footer />
            </>
        );
    }
}