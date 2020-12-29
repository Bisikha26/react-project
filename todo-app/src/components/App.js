import React, {useState} from 'react';
import './App.css';
import TodoList from './Main/TodoList';
import InputField from './Main/InputField'
function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]); //todo list will be array of objects
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <InputField todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/> 
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
