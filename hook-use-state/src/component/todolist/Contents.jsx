export default function Contents(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.students.map((student, idx) => (
                    <tr key={idx}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm"
                                style={{ marginRight: 8 }}
                                data-bs-toggle="modal"
                                data-bs-target="#editStudentModal"
                                onClick={() => props.onEdit(idx)}
                            >
                                Cập nhật
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => props.onDelete(idx)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}