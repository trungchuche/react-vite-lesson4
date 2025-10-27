export default function ContentsJob(props) {
    return (
        <>
            <form onSubmit={props.onAddJob}>
                <input
                    type="text"
                    value={props.newJob}
                    onChange={props.onInputChange}
                    placeholder="Enter new job"
                />
                <button type="submit">Add Job</button>
            </form>

            {/* Hiển thị nội dung đang nhập */}
            <p>New Job: {props.newJob}</p>

            {/* Hiển thị danh sách jobs tạm */}
            <ul>
                {props.jobs && props.jobs.length > 0 ? (
                    props.jobs.map((j, idx) => (
                        <li key={idx}>{j.job}</li>
                    ))
                ) : (
                    <li>Chưa có công việc</li>
                )}
            </ul>
        </>
    )
}