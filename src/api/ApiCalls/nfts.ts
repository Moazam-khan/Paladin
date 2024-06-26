import axios from '../axios';

export const getNFTs = async () => {
  try {
    const endPoint = '/api/nfts/?collection=paladins-erc404-1';
    const res = await axios.get<{
      data: NFT[];
      status: string;
    }>(endPoint);
    if (!res?.data) throw 'Something went wrong GetUser';

    return res.data;
  } catch (err) {
    console.log('error get nfts', err);
    return Promise.reject(err);
  }
};

// https://api.paladins.baboons.tech/api/nfts/account/?collection=test-14117&chain=sepolia&address=0x7868933a36Fb7771f5d87c65857F63C9264d28a4
export const getUserNfts = async (
  address: string,
  chain: string,
  collection: string,
) => {
  try {
    const endPoint = '/api/nfts/account/';
    const res = await axios.get<{
      data: NFT[];
      success: boolean;
    }>(endPoint, {
      params: {
        collection,
        chain,
        address,
      },
    });
    if (!res?.data) throw 'Something went wrong GetUser';
    return res.data;
  } catch (error) {
    console.log('error get user nfts', error);
    return Promise.reject(error);
  }
};
