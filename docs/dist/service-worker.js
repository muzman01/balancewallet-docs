/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef330fe0620525bbcda964d50c9f53ce"
  },
  {
    "url": "assets/css/0.styles.06c609ce.css",
    "revision": "96466635a305e591f5241273c99ee8fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4cfa8b72.js",
    "revision": "ffb2a78e9bec93e1ed6b13ff8e9964e2"
  },
  {
    "url": "assets/js/11.41443e95.js",
    "revision": "40b67c398e11c96a5cc3f22c6c93e48d"
  },
  {
    "url": "assets/js/12.cf53c375.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.0624a0bd.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.b1d75c68.js",
    "revision": "bc0f48d3eab7af2a39e592b57a2f31ce"
  },
  {
    "url": "assets/js/15.4d9e553b.js",
    "revision": "a9d3732fdefb925e8a8d21797eb4bfc5"
  },
  {
    "url": "assets/js/16.44f2fc73.js",
    "revision": "90da0f33f17c3ac4c6549d3b86b31a57"
  },
  {
    "url": "assets/js/17.d6ccf6df.js",
    "revision": "95c61811fd1fe25a9d4a0133ed9ab572"
  },
  {
    "url": "assets/js/18.26bb983b.js",
    "revision": "4a77593b4e49ef4ce3adbc587cab3d55"
  },
  {
    "url": "assets/js/19.83fff882.js",
    "revision": "eb78a947573a2d696d60999ccd613b6d"
  },
  {
    "url": "assets/js/20.ff68d630.js",
    "revision": "22f2dbe49f7a7b9d5adf01419f69e8bf"
  },
  {
    "url": "assets/js/21.0a44220f.js",
    "revision": "5c543c4091038d200ebab1370f699791"
  },
  {
    "url": "assets/js/22.76c52132.js",
    "revision": "37bc9017b29fe20bf6979d6812e2f311"
  },
  {
    "url": "assets/js/23.5b29e598.js",
    "revision": "4733e7180d89ed3c057f659d56e7d2f2"
  },
  {
    "url": "assets/js/24.09930ef2.js",
    "revision": "f2cffe12d9b47aa3a15e873f7920cd56"
  },
  {
    "url": "assets/js/25.00bd0a9d.js",
    "revision": "a3c62d4c6f4f6b830319d101d2270e9f"
  },
  {
    "url": "assets/js/26.fbc959e5.js",
    "revision": "792cdad61fdc562c70c66af5b8f5a778"
  },
  {
    "url": "assets/js/27.14e096e2.js",
    "revision": "db54c1d898a44dc460ac2e50e577f27c"
  },
  {
    "url": "assets/js/28.005848d0.js",
    "revision": "2d348dc948d30ed8a18b68ff9ac3497e"
  },
  {
    "url": "assets/js/29.462c8734.js",
    "revision": "e0fc0af7a228dd5f68e758916174864d"
  },
  {
    "url": "assets/js/30.3a9a8e07.js",
    "revision": "4a44d7cb3466b8e69dfc8a8b4e3e9886"
  },
  {
    "url": "assets/js/31.43fef9d5.js",
    "revision": "4b17ac0140875f55e0422fd09e4a60c8"
  },
  {
    "url": "assets/js/32.19f28893.js",
    "revision": "0c1e5aea2b797cb1e0e37d2d605494de"
  },
  {
    "url": "assets/js/33.5cd34f96.js",
    "revision": "40a3d72d6cac38fac68eb4268656ea41"
  },
  {
    "url": "assets/js/34.7cfc1f1d.js",
    "revision": "754ab655771f00a9e5b0b85f611ba97a"
  },
  {
    "url": "assets/js/35.977cf8f1.js",
    "revision": "3a0594e46e9af5b0b7329442b47c453b"
  },
  {
    "url": "assets/js/36.cf7084e2.js",
    "revision": "f8c8e2da85d20154866eb3038a58fc24"
  },
  {
    "url": "assets/js/37.8430c721.js",
    "revision": "f89be641d9fc8ce4fff67f2c0d57f50a"
  },
  {
    "url": "assets/js/38.23d65ec4.js",
    "revision": "d467c591abee16b168fb3142f365664f"
  },
  {
    "url": "assets/js/39.cafa37bc.js",
    "revision": "3d8a09e296e956e36b7a56af9443ba3d"
  },
  {
    "url": "assets/js/4.78f35b7c.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/40.19c30f63.js",
    "revision": "e65c7a97a00c6025e8ea149e873b4ac8"
  },
  {
    "url": "assets/js/41.42e0e91b.js",
    "revision": "da73a4fc9d67a8c48d4a4d01c8ae832d"
  },
  {
    "url": "assets/js/5.b6bf2fa6.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.38b181d4.js",
    "revision": "2bfe9ff636287f00855677ce16b12034"
  },
  {
    "url": "assets/js/7.eeebec0f.js",
    "revision": "187e5cb7e825ef7eb7b8002590b8a25f"
  },
  {
    "url": "assets/js/8.df4b2a85.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.4372c71a.js",
    "revision": "dbc67d8bffecbf1a29d2e57994c440a5"
  },
  {
    "url": "assets/js/app.20fc4d23.js",
    "revision": "da31dbaf38caf0d2e6e3725bccf62d08"
  },
  {
    "url": "assets/js/vendors~docsearch.4871985a.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.fdd6e850.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "bullicon.png",
    "revision": "082d717e9d7e367bd769f0c634605c7a"
  },
  {
    "url": "faq/index.html",
    "revision": "4e4ce7f62a7ce98a52c1c9c4c772aae9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "31ce92fb860a831fe9cb6c36b3d7f39c"
  },
  {
    "url": "guide/BalanceWallet-balance-wallet-terms-of-use.html",
    "revision": "c3bf169bc04ffaa808aac3f5312785ec"
  },
  {
    "url": "guide/balancewallet-privacy-policy.html",
    "revision": "88a76f3d57408cd4f05d13e158da6911"
  },
  {
    "url": "guide/balancewallet-term-of-use.html",
    "revision": "b9976108a8e047a03716be463e928184"
  },
  {
    "url": "guide/balancewallet.html",
    "revision": "039df6635a3081475a8530aab92d6133"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0af0886300546cccd54c222b7b751fa1"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c16ffdd0ae9c1ad0f76645169a923037"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "efa0d93dfad753481757db6b4cd41d41"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c577db2469b8be320de2365f79ca8a6d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "1010ce1c0916b2fc05a1aab19e88eb79"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a6cbf8bc5bc9f470608272b9d9cd3858"
  },
  {
    "url": "guide/index.html",
    "revision": "fc6225bfc2e76f214996ec09ae07298c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "be329e7a1b884abb2f2e63fb4a334ea4"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ecee2ee10a631316dc109310c1ae722e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "807ba01a954802a88cc2a8d9243930c8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "924f0c2b60ddf82998dab8c544b3ec16"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fea8ba09dc837882ab7515bcbb714e53"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2d39550b84e1a3668b4a571f25553485"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "25402362ad693aa72cd0b05fdc67e543"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d9e4abd9056b1a7cb953bb4ab311af10"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a2026bcafedb1144ebcd9fabe363edc2"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4c9e5f276a29f7b0becc268075ff4195"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "daf32c35b3e30426602c1618c79953ea"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "75a1751a440bcf59d5d781f6c01d9d77"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "0ece02b6a8a0819172d3c42f9757273e"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "b126b19be767c0a4a3eadc5919371f49"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "66a06c9fcda8eac7250ce0354ea9a69e"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
