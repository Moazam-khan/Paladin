import { AppProvider } from "@/providers";
import "@/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";
import logo from "@/assets/logo.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <PrivyProvider
        appId="clwywj9cw03rbz15b6nadav0u"
        config={{
          loginMethods: ["twitter", "wallet"],

          // Customize Privy's appearance in  app
          appearance: {
            theme: "dark",
            logo: logo,
          },
        }}
      >
        <App />
      </PrivyProvider>
    </AppProvider>
  </React.StrictMode>
);
