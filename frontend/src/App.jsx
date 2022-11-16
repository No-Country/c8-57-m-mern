import { Routes, Route } from 'react-router-dom';
import Registro from './components/Registro';

function App() {
  return (
    <div className="bg-primary min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        <Routes>
          <Route path="/register" element={<Registro />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
