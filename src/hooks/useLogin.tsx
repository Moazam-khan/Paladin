import {useUser} from '@/contexts/UserContext';
import {handleTwitterLogin, handleWalletLogin} from '@/utils/auth';
import {
  useLogout,
  usePrivy,
  useLogin as usePrivyLogin,
} from '@privy-io/react-auth';
import {useNavigate} from 'react-router-dom';
import {useDisconnect} from 'wagmi';

const useLogin = () => {
  const {ready, authenticated} = usePrivy();
  const navigate = useNavigate();

  const {refreshUser} = useUser();
  const {login} = usePrivyLogin({
    onComplete: async (
      user,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      linkedAccount,
    ) => {
      if (!wasAlreadyAuthenticated && isNewUser) {
        // if user was not already authenticated log them in in backend
        let backendResponse = null;

        switch (loginMethod) {
          case 'siwe':
            // handle siwe(wallet) login
            backendResponse = await handleWalletLogin(linkedAccount, user);
            // handle tiktok login
            break;
          case 'twitter':
            backendResponse = await handleTwitterLogin(linkedAccount, user);
            break;
          default:
            break;
        }

        if (backendResponse) {
          refreshUser();
        } else {
          logout();
          disconnect();
        }
      }
      refreshUser();
    },
    onError: (error) => {
      console.log(error, '--------error');
    },
  });

  const {disconnect} = useDisconnect();
  const {logout} = useLogout();

  const handleLogin = async () => {
    if (ready && !authenticated) {
      login();
    }
  };

  const handleLogout = async () => {
    if (ready && authenticated) {
      await logout();
      disconnect();
      // go to home page
      navigate('/');
    }
  };

  return {handleLogin, handleLogout};
};

export default useLogin;
