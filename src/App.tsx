import { AppLayout } from "@/components";
import { Home, MyAccount, Nfts } from "@/pages";
import "@/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <UserProvider>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="nfts" element={<Nfts />} />
            <Route path="myAccount" element={<MyAccount />} />
          </Routes>
        </UserProvider>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
