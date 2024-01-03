
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from '../src/places/pages/UpdatePlace'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' exact element={<Users />} />
          <Route path='/:userId/places' exact element={<UserPlaces />} />
          <Route path='/places/new' exact element={<NewPlaces />} />
          <Route path='/places/:placeId' exact element={<UpdatePlace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
