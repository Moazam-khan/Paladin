import { AppLayout } from "@/components";
import { Home, MyAccount, Nfts } from "@/pages";
import "@/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        x
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="nfts" element={<Nfts />} />
          <Route path="myAccount" element={<MyAccount />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
