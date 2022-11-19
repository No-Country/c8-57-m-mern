import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Home from './components/Home';
import Login from './pages/Login';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <div className="bg-primary min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        <Routes>
          <Route path="/register" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgetPassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
