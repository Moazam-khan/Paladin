import {useAccount} from 'wagmi';

type Props = {};

const MyAccount = (props: Props) => {
  const {address} = useAccount();

  return <div>MyAccount</div>;
};

export default MyAccount;
