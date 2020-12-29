import React from 'react';

const InputField = ({setInputText,inputText, todos, setTodos}) => {
    // js code
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button plus" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <button className="todo-button edit" type="submit">
            <i className="fas fa-edit"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="misc">Misc</option>
                </select>
            </div>
        </form>
    );
}

export default InputField;