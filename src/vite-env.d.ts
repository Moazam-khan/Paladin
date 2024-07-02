/// <reference types="vite/client" />
// src/global.d.ts
// src/global.d.ts
interface Window {
  ethereum?: {
    enable: () => Promise<void>;
    selectedAddress?: string;
    request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  };
  web3?: Web3;
}
