import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Router>
      <Header handleInputChange={handleSearchInputChange} value={value} />
      <Routes>
        <Route path="/" element={<Home value={value} />} />
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
