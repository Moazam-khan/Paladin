// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Home, Nfts} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="nfts" element={<Nfts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
