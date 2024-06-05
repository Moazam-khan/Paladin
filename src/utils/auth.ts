import { WalletLogin } from "@/api/ApiCalls/User";

export const handleWalletLogin = async (wallet: any) => {
  try {
    const payload = {
      wallet_address: wallet.address,
    };
    const data = await WalletLogin(payload);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const handleTwitterLogin = async (wallet: any) => {
  try {
    const payload = {
      username: wallet.username,
    };
    const data = await WalletLogin(payload);
    return data;
  } catch (e) {
    console.log(e);
  }
};
