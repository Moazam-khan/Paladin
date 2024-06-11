import { Login } from "@/api/ApiCalls/User";

export const handleWalletLogin = async (wallet: any) => {
  try {
    const payload = {
      id: wallet.id,
      wallet_address: wallet.address,
    };
    const data = await Login(payload);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const handleTwitterLogin = async (account: any) => {
  console.log(account);
  try {
    const payload = {
      id: account.id,
      username: account.username,
      profile_picture: account?.profilePictureUrl || "",
    };
    const data = await Login(payload, "Twitter");
    return data;
  } catch (e) {
    console.log(e);
  }
};
