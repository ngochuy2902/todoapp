import { useRef } from 'react';
import './App.css';
import { useStore, actions } from './store';

function App() {

  const [state, dispatch] = useStore();
  const { todos, input } = state;
  const inputRef = useRef();

  const handleInputChange = (e) => {
    dispatch(actions.setTodoInput(e.target.value))
  }

  const handleAdd = () => {
    dispatch(actions.addTodo(input));
    dispatch(actions.setTodoInput(''));
    inputRef.current.focus();
  };

  const handleRemove = (index) => {
    dispatch(actions.removeTodo(index));
  }

  return (
    <div className='app'>
      <input
        ref={inputRef}
        value={input}
        placeholder='Enter todo...'
        onChange={handleInputChange}
      />
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}
          <span
            style={{ color: 'red', marginLeft: 10 }}
            onClick={() => handleRemove(index)}
          >
            X
          </span>
        </li>
      ))}
    </div>
  );
}

export default App;
