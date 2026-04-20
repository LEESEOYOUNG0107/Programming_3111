import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList({todos, ...rest}) { // rest: toggleTodo, deleteTodo
    return (
        <ul className="todo__list">
            {/* todos에 todo없으면, TodoItemEmpty */}
            {todos.lengh === 0 && <TodoItemEmpty />}

            {/* todos에 todo있으면, TodoItem */}
            {todos.length > 0 && todos.map((todo) =>
                < TodoItem key={todo.id} todo={todo} {...rest} />
            )}
        </ul>
    )
}