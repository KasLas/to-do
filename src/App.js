import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form/Form';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form title="Create a New Task" />} />
        <Route path="/edit/:id" element={<Form title="Edit the Task" />} />
        <Route
          path="*"
          element={<NotFound desc="That page cannot be found" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
