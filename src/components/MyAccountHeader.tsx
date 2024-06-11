import bean from "@/assets/bean.png";
import copyIcon from "@/assets/copy-icon.png";
import accountHeroSm from "@/assets/hero-account-sm.jpg";
import accountHero from "@/assets/hero-account.jpg";
import { useBreakpoint } from "@/hooks";
import { commonStyles } from "@/styles";
import { colors } from "@/utils";
import { Col, Flex } from "antd";
import { useAccount } from "wagmi";
import Button from "./Button";
import Text from "./Text";
import { usePrivy } from "@privy-io/react-auth";
type Props = {};

const MyAccountHeader = (props: Props) => {
  const { address } = useAccount();
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  const { user } = usePrivy();

  return (
    <Col
      span={24}
      style={{
        ...commonStyles.card,
        backgroundImage: `url(${md ? accountHero : accountHeroSm})`,
        backgroundPosition: md ? "center right" : "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: md ? 36 : 16,
        paddingTop: md ? 36 : 130,
      }}
    >
      <Flex gap={24}>
        <img
          src={user?.twitter?.profilePictureUrl || bean}
          style={{ width: sm ? 137 : 102, height: sm ? 137 : 102 }}
        />
        <Flex
          gap={16}
          style={{
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: sm ? 24 : 18,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            @{user?.twitter?.username}
          </Text>
          <Flex align="center" gap={10}>
            <Text
              className="clamp-1-line"
              style={{
                fontFamily: "DarkerGrotesque",
                fontSize: sm ? 20 : 16,
                fontWeight: 500,
                color: colors.white50,
                lineHeight: "100%",
              }}
            >
              {address}
            </Text>
            <img
              src={copyIcon}
              style={{ width: sm ? 20 : 16, height: sm ? 20 : 16 }}
            />
          </Flex>
          <Button
            secondary
            style={{
              alignSelf: "flex-start",
              width: 187,
            }}
          >
            DISCONNECT
          </Button>
        </Flex>
      </Flex>
    </Col>
  );
};

export default MyAccountHeader;
