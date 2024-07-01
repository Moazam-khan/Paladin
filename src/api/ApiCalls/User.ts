import axios from '../axios';

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

export const Login = async (payload: any, auth_type = 'WALLET') => {
  try {
    const endPoint = `api/user/login/?auth_type=${auth_type}`;
    const res = await axios.post<GetWalletLogin>(endPoint, payload);
    if (!res?.data) throw 'Something went wrong';
    return res.data.data;
  } catch (err) {
    console.log('error post wallet', err);
    return Promise.reject(err);
  }
};

export const GetUser = async (): Promise<any> => {
  try {
    const endPoint = '/api/user/current/';
    const res = await axios.get<any>(endPoint);
    if (!res?.data) throw 'Something went wrong GetUser';
    return res.data;
  } catch (err) {
    console.log('error get user', err);
    return Promise.reject(err);
  }
};

export const updateUser = async (payload: FormData, user_id: number) => {
  try {
    const endPoint = `api/user/${user_id}/edit-user/`;

    const res = await axios.patch<any>(endPoint, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (!res?.data) throw 'Something went wrong';
    return res.data;
  } catch (err) {
    console.log('error post updateUser', err);
    return Promise.reject(err);
  }
};

export const getMaxUserDeposit = async (
  amount: number,
) => {
  try {
    const endpoint = `/api/user/max-user-deposit/`;
    const response = await axios.post(endpoint, {amount});
    return response.data;
  } catch (error) {
    console.error('Max user deposit check failed:', error);

    if (error instanceof Error) {
      const responseError = (error as any)?.response?.data?.error;
      return {error: responseError || 'Max user deposit check failed'};
    }

    return {error: 'Max user deposit check failed'};
  }
};

export const getPresaleTotalDeposit = async () => {
  try {
    const endpoint = '/api/user/total-presale-deposit/';
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Total presale deposit check failed:', error);

    if (error instanceof Error) {
      const responseError = (error as any)?.response?.data?.error;
      return {error: responseError || 'Total presale deposit check failed'};
    }

    return {error: 'Total presale deposit check failed'};
  }
};

export const getTotalDepositedAmount = async () => {
  try {
    const endpoint = '/api/user/total-deposits/';
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Total deposits check failed:', error);

    if (error instanceof Error) {
      const responseError = (error as any)?.response?.data?.error;
      return {error: responseError || 'Total deposits check failed'};
    }

    return {error: 'Total deposits check failed'};
  }
};

export const getMinDepositCheck = async (amount: number) => {
  try {
    const endpoint = '/api/user/min-deposit-check/';
    const response = await axios.post(endpoint, {amount});
    return response.data;
  } catch (error) {
    console.error('Min deposit check failed:', error);

    if (error instanceof Error) {
      const responseError = (error as any)?.response?.data?.error;
      return {error: responseError || 'Min deposit check failed'};
    }

    return {error: 'Min deposit check failed'};
  }
};

export const postTransaction = async (transactionData: any) => {
  try {
    const endpoint = '/api/user/transactions/';
    const response = await axios.post(endpoint, transactionData);
    return response.data;
  } catch (error) {
    console.error('Transaction posting failed:', error);
    throw new Error('Transaction posting failed');
  }
};

export const getPresales = async (): Promise<any[]> => {
  try {
    const endpoint = '/api/user/presales/';
    const response = await axios.get<any[]>(endpoint);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch presales:', error);
    throw new Error('Failed to fetch presales');
  }
};

export const getPresaleById = async (presaleId: number): Promise<any> => {
  try {
    const endpoint = `/api/user/presales/${presaleId}/`;
    const response = await axios.get<any>(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch presale with ID ${presaleId}:`, error);
    throw new Error(`Failed to fetch presale with ID ${presaleId}`);
  }
};
