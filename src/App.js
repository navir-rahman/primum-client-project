import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './pages/Header';
import GetTask from './pages/GetTask';
import { Container } from 'react-bootstrap';
import RequireAuth from './pages/RequirAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Container>

        <Routes>
            <Route path="/" element={

            <Home />

            } />

            <Route path="home" element={

            <Home />

            } />

            <Route path="gettask" element={

            <GetTask></GetTask>

            } />
          <Route path="login" element={<Login />} />

        </Routes>
      </Container>
    </div>
  );
}

export default App;
