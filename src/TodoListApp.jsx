import "./todolist.css"
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from "react";

class Todo{
    constructor (text){
        this.id = Date.now();     // 할 일 고유 id:  만든 시각. new Date().getTime()
        this.text = text;         //할일 내용
        this.isCompleted = false; //완료 여부: 기본 값 false
    }
}
export default function TodoListApp() {
    const [todos, setTodos] = useState([]); //할 일 목록: 기본값 빈 리스트
    const addTodo = (text) => setTodos((todos) => [
        //이전 todos 복사
        ...todos,

        //newTodd 만들기

        //이전 todos에 추가하기
        new Todo(text)
    ]);

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}