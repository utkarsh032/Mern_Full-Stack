
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from '../src/places/pages/UpdatePlace'
import Auth from './user/pages/Auth/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useCallback, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <>
        <Route path='/' exact element={<Users />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/places/new' exact element={<NewPlaces />} />
        <Route path='/places/:placeId' exact element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>

    )
  } else {
    routes = (
      <>
        <Route path='/' exact element={<Users />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/auth' exact element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </>)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
