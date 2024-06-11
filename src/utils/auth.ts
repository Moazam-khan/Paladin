import { Login } from "@/api/ApiCalls/User";

export const handleWalletLogin = async (wallet: any, user: any) => {
  try {
    const payload = {
      id: user.id,
      wallet_address: wallet.address,
    };

    const data = await Login(payload);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const handleTwitterLogin = async (account: any, user: any) => {
  try {
    const payload = {
      id: user.id,
      username: account.username,
      profile_picture: account?.profilePictureUrl || "",
    };
    const data = await Login(payload, "Twitter");
    return data;
  } catch (e) {
    console.log(e);
  }
};
