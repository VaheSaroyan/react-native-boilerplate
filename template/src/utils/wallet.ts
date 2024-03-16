import { Environment, SmartWallet, WalletType } from '@pier-wallet/lib';
import Config from 'react-native-config';
export type { NftPosition, WalletType } from '@pier-wallet/lib';

const DEFAULT_GUARDIAN = '0xd56B93C5F31439687C267771A6c39f9720C3b154'; // TESTNET
const API_KEY =
  'Z2fpcXlB1XxaL3ZAKnYVBxdw0ScY-OVMjfNqLHwsZWfqLR8zbOxBZSAJnu4-K0QADhaYRE4GIHbqzjAkRh6IWw';
const TESTNET_VALID_ADDRESS = '0xffE66592e27e4c7Ef483f97fd5fF2334D4B239fE';
const MAINNET_VALID_ADDRESS = '0x1f4b24b36cacaf6d5061b0752783fa71d4678ef7';

const validAddress = Config.ENV === 'PROD' ? MAINNET_VALID_ADDRESS : TESTNET_VALID_ADDRESS;

const pierWalletSDK = SmartWallet(
  Config.ENV === 'PROD' ? Environment.POLYGONMAINNET : Environment.POLYGONTESTNET,
  { saas: { apiKey: API_KEY } }
);

export const namespacedMuuvrSmartWalletName = (userId: string) => `muuvr-${userId}`;

export const isNameAvailable = async (smartWalletName: string) => {
  const isAvailable = await pierWalletSDK.wallet.isNameAvailable({
    smartWalletName
  });
  return isAvailable;
};

export const isSmartWallet = async (smartWalletAddress: string) => {
  const isSmartWallet = await pierWalletSDK.wallet.isSmartWallet({
    smartWalletAddress
  });
  return isSmartWallet;
};

export const getWalletInfoForName = async (smartWalletName: string) => {
  const walletInfo = await pierWalletSDK.wallet.getWalletInfoForName({
    smartWalletName
  });
  return walletInfo;
};

export const getSmartWalletAddress = async (smartWalletName: string) => {
  const smartWalletAddress = await pierWalletSDK.wallet.getSmartWalletAddress({
    smartWalletName
  });
  return smartWalletAddress;
};

export const getAllNFTAddressesAndIds = async (address: string) => {
  const nfts = await pierWalletSDK.position.getAllNFTAddressesAndIds({
    address
  });

  const reduced = nfts.reduce<any[]>((prev, curr) => {
    if ('balance' in curr) {
      const balance = Number(curr.balance);
      for (let i = 0; i < balance; i++) {
        if (i === 0) {
          prev.push(curr);
        } else {
          prev.push({ ...curr, tokenId: `${curr.tokenId}_copy(${i})` });
        }
      }
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);

  const validNfts = reduced.filter(
    nft => nft.tokenAddress.toLowerCase() === validAddress.toLowerCase()
  );

  return validNfts;
};

export const getAllPortfolioPositions = async (smartWalletAddress: string) => {
  const positions = await pierWalletSDK.position.getAllPortfolioPositions({
    smartWalletAddress
  });
  return positions;
};

export const getTransactionConfirmation = async (replaceableTransactionHash: string) => {
  await pierWalletSDK.transactions.getTransactionConfirmation({
    replaceableTransactionHash
  });
};

export const generateNewAccount = () => {
  const newAccount = pierWalletSDK.wallet.generateNewAccount();
  return newAccount;
};

export const createWallet = async (smartWalletName: string) => {
  const createdWallet = await pierWalletSDK.wallet.create({
    smartWalletName
  });
  return createdWallet;
};

export const deployWallet = async (pierWallet: WalletType) => {
  const deployedWallet = await pierWalletSDK.wallet.deploy({
    wallet: pierWallet
  });
  return deployedWallet;
};

export const addDefaultGuardian = async (
  dumbWallet: WalletType['dumbWallet'],
  smartWalletAddress: string
) => {
  await pierWalletSDK.wallet._addGuardian({
    dumbWallet,
    guardianAddress: DEFAULT_GUARDIAN,
    smartWalletAddress
  });
};

export const redeemCode = async (smartWalletAddress: string, accessCode: string) => {
  const txs = await pierWalletSDK.wallet.referrals.mintNftWithCode({
    targetWalletAddress: smartWalletAddress,
    code: accessCode
  });

  await pierWalletSDK.transactions.getTransactionConfirmation({
    replaceableTransactionHash: txs.replaceableTransactionHash
  });
};
