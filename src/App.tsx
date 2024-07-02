import {AppLayout} from '@/components';
import {Home, MyAccount, Nfts, PreSale} from '@/pages';
import '@/styles/App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="nfts" element={<Nfts />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="presale" element={<PreSale />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
