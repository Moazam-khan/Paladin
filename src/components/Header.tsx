import logo from "@/assets/logo.png";
import menu from "@/assets/menu.png";
import wallet from "@/assets/wallet-2.png";
import Sidebar from "@/components/Sidebar";
import { useBreakpoint } from "@/hooks";
import { colors, truncateString } from "@/utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Flex, Row } from "antd";
import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import Button from "./Button";
import Text from "./Text";
import { usePrivy, useLogin, useLogout } from "@privy-io/react-auth";
import { handleWalletLogin } from "@/utils/auth";
type Props = {};

const MenuItem = ({
  active = false,
  style,
  children,
  ...rest
}: {
  active: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div
    style={{
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: active
        ? `1px solid ${colors.primary}`
        : `1px solid transparent`,
      position: "relative",
      top: 1,
      cursor: "pointer",
      transition: "all 0.2s ease",
    }}
    {...rest}
  >
    {typeof children === "string" ? (
      <Text
        style={{
          fontSize: 18,
          position: "relative",
          bottom: 1,
          color: active ? colors.primary : colors.white50,
        }}
      >
        {children}
      </Text>
    ) : (
      children
    )}
  </div>
);

const Header = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { md } = useBreakpoint();
  const { address } = useAccount();
  const { ready, authenticated } = usePrivy();
  const [loading, setLoading] = useState<boolean>(false);

  const { disconnect } = useDisconnect();

  const disableLogin = !ready || (ready && authenticated);
  const disableLogout = !ready || (ready && !authenticated);

  const { login } = useLogin({
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
          case "siwe":
            // handle siwe(wallet) login
            backendResponse = await handleWalletLogin(linkedAccount);
            // handle tiktok login
            break;
          case "twitter":
            // handle twitter login
            break;
          default:
            // handle unknown login method
            break;
        }

        if (backendResponse) {
          // save access token and refresh token in local storage
          localStorage.setItem("accessToken", backendResponse.access_token);
          localStorage.setItem("refreshToken", backendResponse.refresh_token);
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

  const { logout } = useLogout({
    onSuccess: () => {
      disconnect();
    },
  });

  const onLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return (
    <div
      style={{
        margin: "0 24px",
        borderBottom: `1px solid ${colors.white20}`,
      }}
    >
      <Flex
        style={{
          height: 72,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} style={{ height: md ? 22 : 18 }} />
        <Flex gap={46} style={{ display: md ? "flex" : "none" }}>
          <MenuItem
            onClick={() => {
              setActiveMenu("Home");
            }}
            active={activeMenu === "Home"}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              setActiveMenu("Mint");
            }}
            active={activeMenu === "Mint"}
          >
            Mint
          </MenuItem>
          <MenuItem
            onClick={() => setActiveMenu("Staking")}
            active={activeMenu === "Staking"}
          >
            Staking
          </MenuItem>
          <MenuItem
            onClick={() => setActiveMenu("Account")}
            active={activeMenu === "Account"}
          >
            Account
          </MenuItem>
        </Flex>
        {md ? (
          <>
            {ready && authenticated ? (
              <Button
                className="text-tail-end"
                disabled={disableLogout}
                loading={loading}
                onClick={onLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="text-tail-end"
                  disabled={disableLogin}
                  onClick={login}
                  loading={!ready}
                >
                  {ready && !authenticated
                    ? address
                      ? truncateString(address, 12)
                      : "Connect Wallet"
                    : ""}
                </Button>
              </>
            )}
          </>
        ) : (
          <Row
            style={{
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: colors.white10,
              padding: 10,
              gap: 16,
            }}
          >
            <img src={wallet} style={{ width: 24 }} />
            <div
              style={{
                height: 24,
                borderRight: "1px solid rgba(255, 255, 255, 0.10)",
              }}
            />
            <img
              src={menu}
              style={{ width: 24 }}
              onClick={() => setSidebarOpen(true)}
            />
          </Row>
        )}
      </Flex>
      {!md && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
    </div>
  );
};

export default Header;
