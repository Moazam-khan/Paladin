import {handleWalletLogin} from '@/utils/auth';
import {
  useLogout,
  usePrivy,
  useLogin as usePrivyLogin,
} from '@privy-io/react-auth';
import {useDisconnect} from 'wagmi';

const useLogin = () => {
  const {ready, authenticated} = usePrivy();
  const {login} = usePrivyLogin({
    onComplete: async (
      user,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      linkedAccount
    ) => {
      if (!wasAlreadyAuthenticated) {
        // if user was not already authenticated log them in in backend
        let backendResponse = null;

        switch (loginMethod) {
          case 'email':
            // handle email login
            break;
          case 'sms':
            // handle sms login
            break;
          case 'siwe':
            // handle siwe(wallet) login
            backendResponse = await handleWalletLogin(linkedAccount);
            break;
          case 'apple':
            // handle apple login
            break;
          case 'discord':
            // handle discord login
            break;
          case 'github':
            // handle github login
            break;
          case 'google':
            // handle google login
            break;
          case 'linkedin':
            // handle linkedin login
            break;
          case 'spotify':
            // handle spotify login
            break;
          case 'tiktok':
            // handle tiktok login
            break;
          case 'twitter':
            // handle twitter login
            break;
          default:
            // handle unknown login method
            break;
        }

        if (backendResponse) {
          // save access token and refresh token in local storage
          localStorage.setItem('accessToken', backendResponse.access_token);
          localStorage.setItem('refreshToken', backendResponse.refresh_token);
        } else {
          logout();
          disconnect();
        }
      }
    },
    onError: (error) => {
      console.log(error);
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
    }
  };

  return {handleLogin, handleLogout};
};

export default useLogin;
