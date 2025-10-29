export default function Contents(props) {
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Title</th>
            </thead>
            <tbody>
                {props.todos.map((todo, idx) => (
                    <tr key={idx}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}