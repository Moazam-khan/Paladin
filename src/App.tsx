import {AppLayout} from '@/components';
import {Home, MyAccount, Nfts, PreSale} from '@/pages';
import '@/styles/App.css';
import {Route, Routes} from 'react-router-dom';
import Staking from './pages/Staking';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="nfts" element={<Nfts />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="presale" element={<PreSale />} />
        <Route path="staking" element={<Staking />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
