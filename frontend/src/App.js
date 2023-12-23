
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Users />} />
        <Route path='/places/new' exact element={<NewPlaces />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
