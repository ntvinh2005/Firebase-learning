import React from 'react'
import Signup from './components/Auth/Signup'
import Dashboard from './components/Dashboard'
import Login from './components/Auth/Login'
import PrivateRoute from './components/Auth/PrivateRoute'
import ForgotPassword from './components/Auth/ForgotPassword'
import UpdateProfile from './components/Auth/UpdateProfile'
import { Container } from 'react-bootstrap'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: '400px'}}>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Private Route */}
          <Route exact path="/" element = {<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}></Route>

          {/* Auth Route */}
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>

          {/* Drive Route */}
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div>
    </Container>
  );
}

export default App;
