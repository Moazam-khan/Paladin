import { Login } from "@/api/ApiCalls/User";

export const handleWalletLogin = async (wallet: any) => {
  try {
    const payload = {
      wallet_address: wallet.address,
    };
    const data = await Login(payload);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const handleTwitterLogin = async (account: any) => {
  try {
    console.log(account);
    const payload = {
      username: account.username,
    };
    const data = await Login(payload, "Twitter");
    return data;
  } catch (e) {
    console.log(e);
  }
};
