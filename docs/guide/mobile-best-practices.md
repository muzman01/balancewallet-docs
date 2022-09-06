# Best Practices

If this page doesn't answer your question, please feel free to open an issue (suppurtda)

## The Provider (window.ethereum)

::: tip Recent Breaking Provider Changes
If you are an Ethereum application developer and are looking for information about our September 2022 provider API changes,
please see our [Migration Guide](./provider-migration.html) for more details.
:::

The provider API is the same for both Balance Wallet Mobile and the desktop extension.
However, the providers become available (i.e., are injected into the page) at different points in the page lifecycle.



## Using WalletConnect

With WalletConnect, you can use Balance Wallet Mobile as a signer while using applications on another browser, desktop, or mobile application.
Check out the [WalletConnect mobile linking docs](https://docs.walletconnect.org/mobile-linking) for more info.

## Deeplinking



Deeplinks enable instant invocation of the user's preferred wallet application with correctly parameterized transactions.

Only the (authenticated) user can confirm the transaction, and the wallet can be a web, mobile or desktop app.

URLs embedded in QR codes, hyperlinks in web pages, emails, or chat messages enable robust, cross-application signaling between otherwise loosely coupled applications.

You can use deeplinks for things like:

- Creating a URL so your users can open your app directly in Balance Wallet Mobile to interact with your application with their Ethereum account.

- Providing a one-click experience such that users can easily make payments to another account (with pre-filled parameters like recipient address, amount, network, etc.)

- Let your users make gasless and instant transactions with Connext payment channel requests
  - This requires that the user opts in for the InstaPay experimental feature.

## Website Testing and Debugging

Test and debug your web3 site using Balance Wallet Mobile on any iOS or Android device with ease.

### Testing

1. Configure your development server to run on your host machine's local IP address `192.168.x.x`, or `0.0.0.0`.
2. Make sure your testing device is using the same WiFi connection as the machine hosting the server.
3. In the Balance Wallet Mobile web browser, navigate to your website at `http://YOUR_LOCAL_IP:PORT`.

::: tip Tip
If you're using an Android device, you must use `sslip` in your url. Example: `http://192.168.x.x.sslip.io:8000`
:::

### Debugging

::: warning Important
For security purposes, web browser debugging on both iOS and Android will not work if the app was downloaded through the Apple App Store or Google Play Store.
You must build the app locally from [Balance Wallet Mobile repository](bizim link) and run it on a simulator or physical device.
:::

#### iOS

1. Open **Safari Preferences** -> **Advanced** -> enable the **Show Develop menu in menu bar** checkbox
2. Open Balance Wallet Mobile in an iOS simulator or iOS device
3. In the Safari menu bar -> **Develop** -> **[device name]** -> **[app name]** -> **[url - title]**

::: tip Tip
When debugging on a physical device, you must enable Web Inspector in your device's settings:

**Settings** -> **Safari** -> **Advanced** -> **Web Inspector**
:::

#### Android

1. Open Balance Wallet Mobile in an Android emulator or Android device
2. Open Google Chrome's DevTools -> menu (3 dots) -> **More tools** -> **Remote devices**
   You may also navigate to `chrome://inspect` from Chrome to display the list of available devices for debugging
3. Select your device on the left and click **Inspect** on the browser contents you'd like to inspect.

::: tip Tip
When debugging on a physical device you must enable USB debugging in your device's settings:

**Settings** -> **System** -> **About Phone** -> **Developer options** -> **Enable USB debugging**
:::

You can now debug Balance Wallet Mobile's browser contents just as you would on the web!
