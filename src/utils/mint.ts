import {MINT_CONTRACT_ADDRESS} from '@/constants';
import Web3 from 'web3';

export const extractTokenIdsFromReceipt = (receipt: any) => {
  const tokenIds = [];

  for (const log of receipt.logs) {
    if (
      log.topics[0] === Web3.utils.sha3('Transfer(address,address,uint256)') &&
      log.topics.length === 4
    ) {
      const tokenId = Web3.utils.hexToNumberString(log.topics[3]);
      tokenIds.push(tokenId);
    }
  }

  return tokenIds;
};

export const convertDataUrlToJson = (dataUrl: any) => {
  const jsonString = dataUrl.split(/,(.*)/s)[1];
  return JSON.parse(jsonString);
};

export function convertNftData(nftData: any) {
  const {name, description, external_url, image, attributes} = nftData;

  const identifier = name.match(/#(\d+)/)[1];

  const metadata = {
    name: name,
    description: description,
    external_url: external_url,
    image: image,
    attributes: attributes,
  };
  const metadataUrl = `data:application/json;utf8,${JSON.stringify(metadata)}`;

  const convertedData = {
    identifier: identifier,
    collection: 'paladins-erc404-1',
    contract: MINT_CONTRACT_ADDRESS,
    token_standard: 'erc721',
    name: name,
    description: description,
    image_url: image,
    metadata_url: metadataUrl,
    opensea_url: `https://testnets.opensea.io/assets/sepolia/0x8f23881865847b28b5dcda915ce4d6d44fc51769/${identifier}`,
    updated_at: new Date().toISOString(),
    is_disabled: false,
    is_nsfw: false,
  };

  return convertedData;
}
