import { AppLayout } from "@/components";
import { Home, Nfts } from "@/pages";
import "@/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLogin } from "@privy-io/react-auth";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="nfts" element={<Nfts />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
