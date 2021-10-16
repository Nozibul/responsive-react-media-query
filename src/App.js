import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header'
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/login/Login/Login';
import NotFound from './pages/Notfound/NotFound'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
                <Booking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
