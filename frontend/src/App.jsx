import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Home from './components/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import Protected from './components/layout/Protected';
import { AuthProvider } from './context/AauthProvider';
import ForgetPassword from './components/ForgetPassword';
import ConfirmAccount from './pages/ConfirmAccount';
import PaidPackage from './pages/PaidPackage';

function App() {
  return (
    <AuthProvider>
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <div className=" container">
          {/* Rutas Publicas */}
          <Routes>
            <Route path="/register" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<ForgetPassword />} />
            <Route path="/reset:token" element={<NewPassword />} />
            <Route path="/confirm/:token" element={<ConfirmAccount />} />
            {/* Rutas Privadas */}
            <Route path="/" element={<Protected />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
