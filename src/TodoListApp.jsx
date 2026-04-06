export default function TodoListApp(){
    return(
        <div className="">
            <h1>ToDo List</h1>
            <form>
                <input type="text" placeholder="할 일을 입력하세요."/>
                <button type="submit">Add</button>
                <ul>
                    <li>
                        <input type="checkbox" name="" id="chk-1" />
                        <label htmlFor="chk-1">놀기</label>
                        <button>✏️</button>
                        <button>❌</button>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="chk-2" />
                        <label htmlFor="chk-2">집가기</label>
                        <button>✏️</button>
                        <button>❌</button>
                    </li>
                </ul>
            </form>
        </div>
    )
    
}