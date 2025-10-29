export default function TodoForm({ todo, onChange, onAddTodo }) {
    return (
        <form onSubmit={onAddTodo} className="d-flex justify-content-center mb-3">
            <input
                type="text"
                planceholder="Enter new todo"
                value={todo}
                onChange={onChange}
                className="form-control w-50 me-2"
            />
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
    )
}