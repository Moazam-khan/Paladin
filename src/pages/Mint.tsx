import React, { useEffect, useState } from "react";
import { Input, Layout, message } from "antd";
import Web3 from "web3";
import mintAbi from "../abis/mintAbi.json";
import { useAccount } from "wagmi";
import Button from "@/components/Button";
import BigNumber from "bignumber.js";
import paladinsAbi from "../abis/paladins.json";
import { Text } from "@/components";

// const temp_data = {
//   blockHash:
//     "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//   blockNumber: "6098802",
//   cumulativeGasUsed: "4558631",
//   effectiveGasPrice: "42082339165",
//   from: "0x7868933a36fb7771f5d87c65857f63c9264d28a4",
//   gasUsed: "160548",
//   logs: [
//     {
//       address: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//       blockHash:
//         "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//       blockNumber: "6098802",
//       data: "0x0000000000000000000000000000000000000000000000000000000000000002",
//       logIndex: "213",
//       removed: false,
//       topics: [
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//       transactionIndex: "12",
//     },
//     {
//       address: "0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7",
//       blockHash:
//         "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//       blockNumber: "6098802",
//       data: "0x0000000000000000000000000000000000000000000000001bc16d674ec80000",
//       logIndex: "214",
//       removed: false,
//       topics: [
//         "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//         "0x0000000000000000000000009bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//       transactionIndex: "12",
//     },
//     {
//       address: "0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7",
//       blockHash:
//         "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//       blockNumber: "6098802",
//       data: "0x",
//       logIndex: "215",
//       removed: false,
//       topics: [
//         "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//         "0x0000000000000000000000000000000000000000000000000000000000000000",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//         "0x8000000000000000000000000000000000000000000000000000000000000011",
//       ],
//       transactionHash:
//         "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//       transactionIndex: "12",
//     },
//     {
//       address: "0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7",
//       blockHash:
//         "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//       blockNumber: "6098802",
//       data: "0x",
//       logIndex: "216",
//       removed: false,
//       topics: [
//         "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//         "0x0000000000000000000000000000000000000000000000000000000000000000",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//         "0x8000000000000000000000000000000000000000000000000000000000000012",
//       ],
//       transactionHash:
//         "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//       transactionIndex: "12",
//     },
//   ],
//   logsBloom:
//     "0x00010000c00000100000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000008000008000400000000000000000000000000000008000000000000020000000000000000000800000000000000000000000050000000000000000000000000210000002000000000000000000000000000001000000000000000800000100000000020000000000000400000000000000000000000000000000002000000000000200000000000000000000000000000040000000020000000000020000000000000000000000000000000000000000000000000000000",
//   status: "1",
//   to: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//   transactionHash:
//     "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//   transactionIndex: "12",
//   type: "2",
//   events: {
//     NFTPurchased: {
//       address: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//       blockHash:
//         "0xc20494d14f7e4ab7037b94fc4ace38df5850033c2abdac19f76c7578a47a1c22",
//       blockNumber: "6098802",
//       data: "0x0000000000000000000000000000000000000000000000000000000000000002",
//       logIndex: "213",
//       removed: false,
//       topics: [
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0xc922bf549b729d6f047bd7ea6b24599cd9e8664673c5d7b6b78fd5c23465740b",
//       transactionIndex: "12",
//       returnValues: {
//         "0": "0x7868933a36Fb7771f5d87c65857F63C9264d28a4",
//         "1": "2",
//         __length__: 2,
//         buyer: "0x7868933a36Fb7771f5d87c65857F63C9264d28a4",
//         amount: "2",
//       },
//       event: "NFTPurchased",
//       signature:
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//       raw: {
//         data: "0x0000000000000000000000000000000000000000000000000000000000000002",
//         topics: [
//           "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//           "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//         ],
//       },
//     },
//   },
// };

// const temp2_data = {
//   blockHash:
//     "0x08751c8cfafc47bff365b313cf1a850d4b89438c6c68d7e4200eabfcfdf5e91e",
//   blockNumber: "6098661",
//   cumulativeGasUsed: "584765",
//   effectiveGasPrice: "179574164670",
//   from: "0x7868933a36fb7771f5d87c65857f63c9264d28a4",
//   gasUsed: "128629",
//   logs: [
//     {
//       address: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//       blockHash:
//         "0x08751c8cfafc47bff365b313cf1a850d4b89438c6c68d7e4200eabfcfdf5e91e",
//       blockNumber: "6098661",
//       data: "0x0000000000000000000000000000000000000000000000000000000000000001",
//       logIndex: "13",
//       removed: false,
//       topics: [
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0x2fcb140183480e144a20703147e02fbf699d7af111302a88491eb79f2c71d926",
//       transactionIndex: "6",
//     },
//     {
//       address: "0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7",
//       blockHash:
//         "0x08751c8cfafc47bff365b313cf1a850d4b89438c6c68d7e4200eabfcfdf5e91e",
//       blockNumber: "6098661",
//       data: "0x0000000000000000000000000000000000000000000000000de0b6b3a7640000",
//       logIndex: "14",
//       removed: false,
//       topics: [
//         "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//         "0x0000000000000000000000009bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0x2fcb140183480e144a20703147e02fbf699d7af111302a88491eb79f2c71d926",
//       transactionIndex: "6",
//     },
//     {
//       address: "0xac635e8fae88e9042e1dd46b6c757b1bc94aaba7",
//       blockHash:
//         "0x08751c8cfafc47bff365b313cf1a850d4b89438c6c68d7e4200eabfcfdf5e91e",
//       blockNumber: "6098661",
//       data: "0x",
//       logIndex: "15",
//       removed: false,
//       topics: [
//         "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//         "0x0000000000000000000000000000000000000000000000000000000000000000",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//         "0x800000000000000000000000000000000000000000000000000000000000000e",
//       ],
//       transactionHash:
//         "0x2fcb140183480e144a20703147e02fbf699d7af111302a88491eb79f2c71d926",
//       transactionIndex: "6",
//     },
//   ],
//   logsBloom:
//     "0x00000000800000100000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000008000400000000000000000000000000000008000000000000020000000000000000000800000000000000000000000050000000000000000000000000010000042000000000000000004000000000001000000000000000000000100000000020000000000000000000000000000000000000000080000002000000000000200000000000000000000000000000040000000020000000000020000000000000000000000000000000000000000000000000000000",
//   status: "1",
//   to: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//   transactionHash:
//     "0x2fcb140183480e144a20703147e02fbf699d7af111302a88491eb79f2c71d926",
//   transactionIndex: "6",
//   type: "2",
//   events: {
//     NFTPurchased: {
//       address: "0x9bdb5d66d7fd059504aa9d9cccbed87c50ed7b5c",
//       blockHash:
//         "0x08751c8cfafc47bff365b313cf1a850d4b89438c6c68d7e4200eabfcfdf5e91e",
//       blockNumber: "6098661",
//       data: "0x0000000000000000000000000000000000000000000000000000000000000001",
//       logIndex: "13",
//       removed: false,
//       topics: [
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//         "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//       ],
//       transactionHash:
//         "0x2fcb140183480e144a20703147e02fbf699d7af111302a88491eb79f2c71d926",
//       transactionIndex: "6",
//       returnValues: {
//         "0": "0x7868933a36Fb7771f5d87c65857F63C9264d28a4",
//         "1": "1",
//         __length__: 2,
//         buyer: "0x7868933a36Fb7771f5d87c65857F63C9264d28a4",
//         amount: "1",
//       },
//       event: "NFTPurchased",
//       signature:
//         "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//       raw: {
//         data: "0x0000000000000000000000000000000000000000000000000000000000000001",
//         topics: [
//           "0xe38cbc8a9e3260a040319ef457cdd3ffa680a53703ce325be58a81bfbbc63b79",
//           "0x0000000000000000000000007868933a36fb7771f5d87c65857f63c9264d28a4",
//         ],
//       },
//     },
//   },
// };

const extractTokenIdsFromReceipt = (receipt: any) => {
  const tokenIds = [];
  console.log(receipt, "-receipt");

  for (const log of receipt.logs) {
    console.log(log);
    if (
      log.topics[0] === Web3.utils.sha3("Transfer(address,address,uint256)") &&
      log.topics.length === 4
    ) {
      const tokenId = Web3.utils.hexToNumberString(log.topics[3]);
      tokenIds.push(tokenId);
    }
  }

  return tokenIds;
};

const convertDataUrlToJson = (dataUrl: any) => {
  const jsonString = dataUrl.split(/,(.*)/s)[1];
  return JSON.parse(jsonString);
};

const Mint = () => {
  const [amount, setAmount] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const { address, connector } = useAccount();
  const [purchasedNFTs, setPurchasedNFTs] = useState<any>([]);

  const fetchNftMetadata = async (tokenIds: any) => {
    try {
      const web3 = new Web3((await connector?.getProvider()) || "");
      const contract = new web3.eth.Contract(
        paladinsAbi,
        "0xAc635E8fAE88E9042E1dd46b6C757B1Bc94AAba7"
      );

      const allURIs = [];

      for (const tokenId of tokenIds) {
        const tokenUri = await contract.methods.tokenURI(tokenId).call();

        allURIs.push(convertDataUrlToJson(tokenUri));
      }

      setPurchasedNFTs(allURIs);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch NFT metadata");
    }
  };

  // Smart contract details
  const contractAddress = "0x9Bdb5d66d7FD059504AA9D9ccCbed87C50eD7B5C";

  const handleBuy = async () => {
    setPurchasedNFTs([]);
    if (!amount || isNaN(amount)) {
      message.error("Please enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      const web3 = new Web3((await connector?.getProvider()) || "");
      const contract = new web3.eth.Contract(mintAbi, contractAddress);

      const price: string = await contract.methods.price().call();

      const gas: bigint = await contract.methods.buy(amount).estimateGas({
        from: address,
        value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
      });

      const tx = await contract.methods.buy(amount).send({
        from: address,
        value: BigNumber(price).multipliedBy(BigNumber(amount)).toString(),
        gas: String(gas),
      });

      const tokenIds = extractTokenIdsFromReceipt(tx);

      await fetchNftMetadata(tokenIds);

      message.success("Transaction successful");
    } catch (error) {
      console.error(error);
      message.error("Transaction failed");
    }
    setLoading(false);
  };

  console.log(purchasedNFTs);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight: "50vh",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {purchasedNFTs.length > 0 && purchasedNFTs && (
          <Text
            style={{ marginBottom: "10px", color: "green", fontSize: "20px" }}
          >
            You have purched
          </Text>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {purchasedNFTs.map((item: any) => (
            <img
              src={`${item.image}`}
              width={170}
              height={170}
              style={{ border: "1px solid gray" }}
            />
          ))}
        </div>
      </div>
      <Input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: 300, background: "none" }}
      />

      <Button
        style={{ marginLeft: "10px" }}
        type="primary"
        onClick={handleBuy}
        loading={loading}
      >
        Buy
      </Button>
    </div>
  );
};

export default Mint;
