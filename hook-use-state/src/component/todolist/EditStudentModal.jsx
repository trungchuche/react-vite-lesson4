import React from "react";

export default function EditStudentModal({ onClose, onSubmit, name, age, onChange }) {
    return (
        <div
            className="modal fade"
            id="editStudentModal"
            tabIndex="-1"
            aria-labelledby="editStudentModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={onSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="editStudentModalLabel">Cập nhật sinh viên</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Tên:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="newName"
                                    value={name}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tuổi:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="newAge"
                                    value={age}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={onClose}
                            >
                                Đóng
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
