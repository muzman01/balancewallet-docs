# Introduction
Welcome to Balance Wallet Developer Documentation. Balance Wallet is the trailblazing tool enabling user interactions and experience on Web3. It is currently available as a browser extension and as a mobile app on both Android and iOS devices. The purpose of this documentation is to illustrate how to build a dapp with Balance Wallet.



::: tip Recent Breaking Provider Changes
If you are an Ethereum application developer and are looking for information about our January 2021 provider API changes,
please see our [Migration Guide](./provider-migration.html) for more details.
:::

## Why Balance Wallet

Balance Wallet was created to meet the needs of secure and usable Ethereum-based web sites. In particular, it handles account management and connecting the user to the blockchain.




## Account Management



This security feature also comes with developer convenience: For developers, you simply interact with the globally available `ethereum` API that identifies the users of web3-compatible browsers (like Balance Wallet users), and whenever you request a transaction signature (like `eth_sendTransaction`, `eth_signTypedData`, or others), Balance Wallet will prompt the user in as comprehensible a way as possible. This keeps users informed, and leaves attackers only the option of trying to phish individual users, rather than performing mass hacks (although [DNS hacks can still be used for phishing en masse]

## Blockchain Connection

Balance Wallet comes pre-loaded with fast connections to the Ethereum blockchain and several test networks via our friends at [Infura](https://infura.io/). This allows you to get started without synchronizing a full node, while still providing the option to upgrade your security and use the blockchain provider of your choice.

Today, Balance Wallet is compatible with any blockchain that exposes an [Ethereum-compatible JSON RPC API](https://eth.wiki/json-rpc/API), including custom and private blockchains. For development, we recommend running a test blockchain like [Ganache](https://www.trufflesuite.com/ganache).

We are aware that there are constantly new private blockchains being created. If you are interested in integrating Balance Wallet with your own custom network, [we have an API that has already enabled a number of networks to do the same.]

