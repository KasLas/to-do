import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      if (task.name.includes(value)) {
        return task;
      }
    });

    if (filteredTasks) {
      setFilteredTasks(filteredTasks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
  };

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleInputChange = (input) => {
    setValue(input);
  };

  return (
    <Router>
      <Header handleInputChange={handleInputChange} value={value} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allTasks={value.length > 0 ? filteredTasks : tasks}
              searchValue={value}
            />
          }
        />
        <Route path="/create" element={<Form title="Create a New Task" />} />
        <Route path="/edit/:id" element={<Form title="Edit the Task" />} />
        <Route
          path="*"
          element={
            <NotFound desc="That page cannot be found" displayButton={true} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
