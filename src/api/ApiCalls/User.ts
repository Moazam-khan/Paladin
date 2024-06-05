import axios from "../axios";

interface WalletLogin {
  access_token: string;
  refresh_token: string;
  user_id: number;
  wallet_address: string;
}
interface GetWalletLogin {
  data: WalletLogin;
  status: string;
}

export const Login = async (payload: any, auth_type = "WALLET") => {
  try {
    const endPoint = `api/user/login/?auth_type=${auth_type}`;
    const res = await axios.post<GetWalletLogin>(endPoint, payload);
    if (!res?.data) throw "Something went wrong";
    return res.data.data;
  } catch (err) {
    console.log("error post wallet", err);
    return Promise.reject(err);
  }
};

export const GetUser = async (): Promise<any> => {
  try {
    const endPoint = "/api/user/current/";
    const res = await axios.get<any>(endPoint);
    if (!res?.data) throw "Something went wrong GetUser";
    console.log("get user", res.data);
    return res.data;
  } catch (err) {
    console.log("error get user", err);
    return Promise.reject(err);
  }
};
