(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{405:function(t,e,a){"use strict";a.r(e);var n=a(11),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"accessing-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-accounts"}},[t._v("#")]),t._v(" Accessing Accounts")]),t._v(" "),a("p",[t._v("User accounts are used in a variety of contexts in Ethereum, including as identifiers and for signing transactions. In order to request a signature from the user or have the user approve a transaction, one must be able to access the user's accounts. The "),a("code",[t._v("wallet methods")]),t._v(" below involve a signature or transaction approval and all require the sending account as a function parameter.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("eth_sendTransaction")])]),t._v(" "),a("li",[a("code",[t._v("eth_sign")]),t._v(" (insecure and unadvised to use)")]),t._v(" "),a("li",[a("code",[t._v("personal_sign")])]),t._v(" "),a("li",[a("code",[t._v("eth_signTypedData")])])]),t._v(" "),a("p",[t._v("Once you've "),a("RouterLink",{attrs:{to:"/guide/getting-started.html"}},[t._v("connected to a user")]),t._v(", you can always re-check the current account by checking "),a("code",[t._v("ethereum.selectedAddress")]),t._v(".")],1),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("p",[t._v("If you'd like to be notified when the address changes, we have an event you can subscribe to:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accountsChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("accounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time to reload your interface with accounts[0]!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If the first account in the returned array isn't the account you expected, you should notify the user!\nIn the future, the accounts array may contain more than one account. This functionality isn't available yet. The first account in the array will always be considered the user's \"selected\" account.")])])}),[],!1,null,null,null);e.default=s.exports}}]);