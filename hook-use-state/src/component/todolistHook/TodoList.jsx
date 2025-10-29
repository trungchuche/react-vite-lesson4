export default function TodoList({ todos }) {
    if (todos.length === 0) return <p
        className="text-center">Chưa có công việc nào</p>;
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

