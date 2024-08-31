import {AppLayout} from '@/components';
import {Account, Home, Mint, Staking,} from '@/pages';
import '@/styles/App.css';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="Account" element={<Account />} />
        <Route path="Staking" element={<Staking />} />
        <Route path="Mint" element={<Mint />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
