import React, { Component } from "react";
import Header from "./Header";
import ContentsJob from "./ContensJob";

export default class TodoAppJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Jobs: [], // khởi tạo rỗng để lưu danh sách
            newJob: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ newJob: e.target.value });
    };

    handleAddJob = (e) => {
        e.preventDefault();
        const { newJob, Jobs } = this.state;
        if (newJob) {
            this.setState({
                Jobs: [...Jobs, { job: newJob }],
                newJob: '',
            });
        }
    };

    render() {
        return (
            <>
                <Header />
                <ContentsJob
                    newJob={this.state.newJob}
                    onInputChange={this.handleInputChange}
                    onAddJob={this.handleAddJob}
                    jobs={this.state.Jobs} // truyền danh sách xuống child
                />
            </>
        )
    }
}