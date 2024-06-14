import Web3 from 'web3';

export const extractTokenIdsFromReceipt = (receipt: any) => {
  const tokenIds = [];
  console.log(receipt, '-receipt');

  for (const log of receipt.logs) {
    console.log(log);
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
  // Extract data from the input
  const {name, description, external_url, image, attributes} = nftData;

  // Get the identifier from the name
  const identifier = name.match(/#(\d+)/)[1];

  // Construct metadata URL
  const metadata = {
    name: name,
    description: description,
    external_url: external_url,
    image: image,
    attributes: attributes,
  };
  const metadataUrl = `data:application/json;utf8,${JSON.stringify(metadata)}`;

  // Construct the final object
  const convertedData = {
    identifier: identifier,
    collection: 'test-14117',
    contract: '0x8f23881865847b28b5dcda915ce4d6d44fc51769',
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
