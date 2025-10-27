import React, { useEffect, useRef } from "react";

export default function AddStudentModal({ show, onClose, onSubmit, name, age, onChange }) {
    const modalRef = useRef();

    useEffect(() => {
        if (show && window.bootstrap) {
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.show();
            // Đóng modal khi click Đóng hoặc submit
            const handleHide = () => onClose && onClose();
            modalRef.current.addEventListener('hidden.bs.modal', handleHide);
            return () => {
                modalRef.current.removeEventListener('hidden.bs.modal', handleHide);
            };
        }
    }, [show, onClose]);

    return (
        <div
            className="modal fade"
            id="addStudentModal"
            tabIndex="-1"
            aria-labelledby="addStudentModalLabel"
            aria-hidden="true"
            ref={modalRef}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={onSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="addStudentModalLabel">Thêm Sinh Viên</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
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
                                Thêm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
