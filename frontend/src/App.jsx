import { Route, Routes } from 'react-router-dom';
import BeforeStart from './components/BeforeStart';
import Home from './components/Home';
import Targets from './components/Targets';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Targets />} />
        <Route path="/beforeStart" element={<BeforeStart />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
