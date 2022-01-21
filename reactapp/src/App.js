import React, {useState} from "react";
import TodoList from "./TodoList"

const App = () => {
    // const [count, setCount] = useState(0);
    return( 
    <div>
        {/* {count}
        <br />
        <button onClick={() => setCount(count + 1)}>Click Me</button> */}
        <TodoList />
    </div>
    )
}

export default App;