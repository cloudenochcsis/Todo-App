import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Use environment variable for API URL if available
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/todos';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos([response.data, ...todos]);
      setError(''); // Clear any previous errors on success
    } catch (err) {
      console.error('Error adding todo:', err);
      
      // Provide more specific error messages
      if (err.response) {
        // Server responded with an error
        setError(`Failed to add todo: ${err.response.data.message || 'Server error'}`);
      } else if (err.request) {
        // Request was made but no response received
        setError('Failed to add todo: No response from server. Check your connection.');
      } else {
        // Error setting up the request
        setError('Failed to add todo: Network error');
      }
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, { completed: !completed });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main className="App-main">
        <TodoForm addTodo={addTodo} />
        {error && <div className="error">{error}</div>}
        {loading ? (
          <p>Loading todos...</p>
        ) : (
          <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
