import Header from "./Header"
import Footer from "./Footer"
import Contents from "./Contents"
import AddStudentModal from "./AddStudentModal";
import EditStudentModal from "./EditStudentModal";
import React, { Component } from "react"
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// KHÔNG import bootstrap.bundle.min.js ở đây, hãy thêm vào index.html

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsStudents: [
                { name: 'Nguyen Van A', age: 20 },
                { name: 'Nguyen Van B', age: 21 },
                { name: 'Nguyen Van C', age: 22 },
            ],
            newName: '',
            newAge: '',
            editName: '',
            editAge: '',
            editingIndex: null,
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddStudent = (e) => {
        e.preventDefault();
        const { newName, newAge, IsStudents } = this.state;
        if (newName && newAge) {
            this.setState({
                IsStudents: [...IsStudents, { name: newName, age: Number(newAge) }],
                newName: '',
                newAge: ''
            }, () => {
                // Đóng modal thêm
                if (window.bootstrap) {
                    const modal = window.bootstrap.Modal.getInstance(document.getElementById('addStudentModal'));
                    if (modal) modal.hide();
                }
            });
        }
    };

    handleDeleteStudent = (idx) => {
        const newList = this.state.IsStudents.filter((_, i) => i !== idx);
        this.setState({ IsStudents: newList });
    };

    handleEditStudent = (idx) => {
        const student = this.state.IsStudents[idx];
        // Chỉ cập nhật state để modal (mở bởi data-bs trên nút) nhận dữ liệu
        this.setState({
            editName: student.name,
            editAge: student.age,
            editingIndex: idx
        });
    };

    handleCloseEditModal = () => {
        this.setState({ editName: '', editAge: '', editingIndex: null });
        // Không cần gọi thủ công để đóng modal nếu dùng data-bs-dismiss trên nút Đóng
    };

    handleEditInputChange = (e) => {
        this.setState({ [e.target.name === 'newName' ? 'editName' : 'editAge']: e.target.value });
    };

    handleUpdateStudent = (e) => {
        e.preventDefault();
        const { editName, editAge, editingIndex, IsStudents } = this.state;
        if (editName && editAge && editingIndex !== null) {
            const updatedList = [...IsStudents];
            updatedList[editingIndex] = { name: editName, age: Number(editAge) };
            this.setState({
                IsStudents: updatedList,
                editName: '',
                editAge: '',
                editingIndex: null
            }, () => {
                // Đóng modal cập nhật giống logic thêm sinh viên
                if (window.bootstrap) {
                    const modal = window.bootstrap.Modal.getInstance(document.getElementById('editStudentModal'));
                    if (modal) modal.hide();
                }
            });
        }
    };

    render() {
        return (
            <>
                <Header />
                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addStudentModal"
                    style={{ margin: '16px' }}
                >
                    Thêm sinh viên
                </button>
                <Contents
                    students={this.state.IsStudents}
                    onEdit={this.handleEditStudent}
                    onDelete={this.handleDeleteStudent}
                />
                <Footer />
                <AddStudentModal
                    onClose={() => {
                        this.setState({ newName: '', newAge: '' });
                        const modal = window.bootstrap.Modal.getInstance(document.getElementById('addStudentModal'));
                        if (modal) modal.hide();
                    }}
                    onSubmit={this.handleAddStudent}
                    name={this.state.newName}
                    age={this.state.newAge}
                    onChange={this.handleInputChange}
                />
                <EditStudentModal
                    show={false} // Modal sẽ được show bằng Bootstrap JS
                    onClose={this.handleCloseEditModal}
                    onSubmit={this.handleUpdateStudent}
                    name={this.state.editName}
                    age={this.state.editAge}
                    onChange={this.handleEditInputChange}
                />
            </>
        );
    }
}