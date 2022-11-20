import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Home from './components/Home';
import Login from './pages/Login';
import ResetPass from './pages/ResetPass';
import NewPassword from './pages/NewPassword';
import Protected from './components/layout/Protected';
import { AuthProvider } from './context/AauthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="bg-primary min-h-screen flex items-center">
        <div className="px-10 container m-auto py-4">

          {/* Rutas Publicas */}
          <Routes>

            <Route path="/register" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<ResetPass />} />
            <Route path="/reset:token" element={<NewPassword />} />
            <Route path="/confirm/:token" element={<ResetPass />} />

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
