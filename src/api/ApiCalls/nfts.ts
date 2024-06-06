import axios from "../axios";

export const getNFTs = async (): Promise<any> => {
  try {
    const endPoint = "/api/nfts/?collection=test-14117";
    const res = await axios.get<any>(endPoint);
    if (!res?.data) throw "Something went wrong GetUser";

    return res.data;
  } catch (err) {
    console.log("error get nfts", err);
    return Promise.reject(err);
  }
};
