"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(87462),i=(a(67294),a(3905));const r=a.p+"assets/images/create-validator0-291ec44646352e24db426d8a06106ffa.png",o=a.p+"assets/images/create-validator1-58c98deaab088f52d2eeb79f5cf00933.png",l=a.p+"assets/images/create-validator2-7ec797633ff45924f26333205b9df3fc.png",s=a.p+"assets/images/create-validator3-52e71cd8a81e18efe47bbfb5634a1043.png",d=a.p+"assets/images/create-validator4-1d5ed1bbb73dd2f095d2318c416b2627.png",c={},p="Validator Creation Guide",u={unversionedId:"bcfusion/validators/creation",id:"bcfusion/validators/creation",title:"Validator Creation Guide",description:"This guide outlines the process for creating a new validator on the BNB Smart Chain (BSC).",source:"@site/docs/bcfusion/validators/creation.md",sourceDirName:"bcfusion/validators",slug:"/bcfusion/validators/creation",permalink:"/docs/bcfusion/validators/creation",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/validators/creation.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Validator Migration Guide",permalink:"/docs/bcfusion/validators/migrations"},next:{title:"Key Management for BSC Validators",permalink:"/docs/bcfusion/validators/key-management"}},m={},h=[{value:"Terminology",id:"terminology",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Connecting to the dApp",id:"1-connecting-to-the-dapp",level:3},{value:"2. Filling out the form",id:"2-filling-out-the-form",level:3},{value:"Basic Information",id:"basic-information",level:3},{value:"Addresses",id:"addresses",level:3},{value:"Generate Consensus Address",id:"generate-consensus-address",level:4},{value:"Generate Vote Address and BLS Proof",id:"generate-vote-address-and-bls-proof",level:4},{value:"Create indentity",id:"create-indentity",level:4},{value:"Local Key",id:"local-key",level:5},{value:"Ledger Key",id:"ledger-key",level:5},{value:"Commissions",id:"commissions",level:3},{value:"Self-delegation",id:"self-delegation",level:3},{value:"3. Submitting the form",id:"3-submitting-the-form",level:3}],f={toc:h},g="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validator-creation-guide"},"Validator Creation Guide"),(0,i.kt)("p",null,"This guide outlines the process for creating a new validator on the BNB Smart Chain (BSC).\nThe BNB staking dApp is the official tool for creating and managing validators on the BSC."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Testnet\n"),": ",(0,i.kt)("a",{parentName:"li",href:"https://testnet-staking.bnbchain.org/en/bnb-staking"},"https://testnet-staking.bnbchain.org/en/bnb-staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,i.kt)("em",{parentName:"li"},"To be announced"))),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator Address"),": The address for creating and modifying validator information on the BSC. You should use this\naddress when connecting to the staking dApp. The corresponding account should have more than 2001 BNB for creating\nvalidtors and paying transaction fees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consensus Address"),": A unique address for your validator's node. It is used for consensus engine when mining new\nblocks. It should be different from the operator address. If you have an existing validator created on the Beacon\nChain, the old consensus adddress cannot be reused and you should create a new one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vote Address"),": An address used for fast finality voting. If you have an existing validator created on the Beacon\nChain, the old vote adddress cannot be reused and you should create a new one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BLS Proof"),": A BLS signature verifying ownership of the vote address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identity"),": For associating a new validator with an existing one from the Beacon Chain. It is useful when delegators\n",(0,i.kt)("a",{parentName:"li",href:"/docs/bcfusion/users/stake-migration"},"migrate their stakes")," - they can know there is a new validator running by the same\nvalidator operator. This is optional unless you're migrating an old validator.")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-connecting-to-the-dapp"},"1. Connecting to the dApp"),(0,i.kt)("p",null,"Please connect to the staking dApp using your ",(0,i.kt)("strong",{parentName:"p"},"Operator Address"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust Wallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMask"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletConnect"),"\noptions are available for the step. Make sure that the account has more than 2001 BNB before moving on to the next step."),(0,i.kt)("img",{src:r,width:"400"}),(0,i.kt)("h3",{id:"2-filling-out-the-form"},"2. Filling out the form"),(0,i.kt)("p",null,"Navigate to the dApp and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Become a Validator")," button in the right middle of the page\nto initiate the creation process."),(0,i.kt)("p",null,"The following information is required to create a validator."),(0,i.kt)("h3",{id:"basic-information"},"Basic Information"),(0,i.kt)("img",{src:o,width:"600"}),(0,i.kt)("p",null,"You'll need to provide the following details on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Validator")," page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validator Name"),": Choose a name consisting of 3-9 alphanumeric characters, excluding special characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website"),": Provide a URL to a website with additional information about your validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": A brief description of your validator.")),(0,i.kt)("p",null,"To enhance your validator's visibility, consider uploading additional information to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-validator-directory"},"BSC validator directory"),". Your avatar, once uploaded, will be\ndisplayed in the staking dApp."),(0,i.kt)("h3",{id:"addresses"},"Addresses"),(0,i.kt)("img",{src:l,width:"600"}),(0,i.kt)("p",null,"The following addresses are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consensus Address"),": A unique address for your validator's node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vote Address"),": An address used for fast finality voting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BLS Proof"),": A BLS signature verifying ownership of the vote address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identity"),": For associating a new validator with an existing one from the Beacon Chain. This is optional unless\nyou're migrating an old validator.")),(0,i.kt)("h4",{id:"generate-consensus-address"},"Generate Consensus Address"),(0,i.kt)("p",null,"Download the BSC geth binary from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/tag/v1.3.10"},"the official release page"),"."),(0,i.kt)("p",null,"Note: Make sure you are downloading the correct binary based on your machine's platform, e.g., if you are using MacOS,\nyou should download the ",(0,i.kt)("inlineCode",{parentName:"p"},"geth_mac")," file. In the following, we will refer the binary as ",(0,i.kt)("inlineCode",{parentName:"p"},"geth")," for simplicity."),(0,i.kt)("p",null,"To create a new account for mining, please use the following command and set a password for the account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"geth account new --datadir ${DATA_DIR}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA_DIR"),": The directory where you want to store your key store files.")),(0,i.kt)("p",null,"This command will return the public address (i.e. consensus address) and the path to your private key.\nPlease backup the key file!"),(0,i.kt)("p",null,"An example consensus address is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4b3FFeDb3470D441448BF18310cAd868Cf0F44B5"),"."),(0,i.kt)("p",null,"If you already have an account for mining, you can use the seed phrase to recover the account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"geth account import --datadir ${DATA_DIR}\n")),(0,i.kt)("p",null,"If you have created a validator on the Beacon Chain, please use a different one for the consensus address."),(0,i.kt)("h4",{id:"generate-vote-address-and-bls-proof"},"Generate Vote Address and BLS Proof"),(0,i.kt)("p",null,"To create a new BLS account please use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," geth bls account new --datadir ${DATA_DIR}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA_DIR"),": The directory where you want to store your key store files.")),(0,i.kt)("p",null,"If you already have a voting key, create a bls wallet and use the keyfile to recover it, using the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," geth bls account import ${KEY_FILE} --datadir ${DATA_DIR}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA_DIR"),": The backup file for restoring the BLS account.")),(0,i.kt)("p",null,"Then you can get your vote address by running the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"geth bls account list --datadir ${DATA_DIR}\n")),(0,i.kt)("p",null,"An example address\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"b5fe571aa1b39e33c2735a184885f737a59ba689177f297cba67da94bea5c23dc71fd4deefe2c0d2d21851eb11081f69"),"."),(0,i.kt)("p",null,"Then you can get your bls proof by running the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"geth bls account generate-proof --chain-id ${BSC_CHAIN_ID} ${OPEATOR_ADDRESS} ${VOTE_ADDRESS}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BSC_CHAIN_ID"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"56")," for BSC mainnet, and ",(0,i.kt)("inlineCode",{parentName:"li"},"97")," for BSC testnet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPEATOR_ADDRESS"),": The address of your account, which will be reconginzed as the operator of the new validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VOTE_ADDRESS"),": The vote address created in the last step.")),(0,i.kt)("p",null,"An example proof\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"0xaf762123d031984f5a7ae5d46b98208ca31293919570f51ae2f0a03069c5e8d6d47b775faba94d88dbbe591c51c537d718a743b9069e63b698ba1ae15d9f6bf7018684b0a860a46c812716117a59c364e841596c3f0a484ae40a1178130b76a5"),"."),(0,i.kt)("h4",{id:"create-indentity"},"Create indentity"),(0,i.kt)("p",null,"Identity is used for assocaiting the new validator to the old validator created on the Beacon Chain, to facilitate\ndelegators moving their stakes to the same validator operator when ",(0,i.kt)("a",{parentName:"p",href:"/docs/bcfusion/users/stake-migration"},"migrations"),".\nIf you never create a validator in this ",(0,i.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/staking"},"page"),", you can leave it empty."),(0,i.kt)("p",null,"Please download BC client binary\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases/tag/v0.10.19"},"the official release page"),"."),(0,i.kt)("p",null,"Note: Make sure you are downloading the correct binary based on your machine's platform, e.g., if you are using MacOS,\nyou should download the ",(0,i.kt)("inlineCode",{parentName:"p"},"macos_binary.zip")," file, and after unzip it your will find ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli")," (for mainet)\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"tbnbcli"),"(for testnet). In the following, we will refer the binary as ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli")," for simplicity."),(0,i.kt)("h5",{id:"local-key"},"Local Key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"${workspace}/bin/bnbcli \\\n  validator-ownership \\\n  sign-validator-ownership \\\n  --bsc-operator-address ${NEW_VALIDATOR_OPERATOR_ADDR_ON_BSC} \\\n  --from ${ACCOUNT_NAME} \\\n  --chain-id ${BC_CHAIN_ID} \\\n")),(0,i.kt)("h5",{id:"ledger-key"},"Ledger Key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"${workspace}/bin/bnbcli \\\n  validator-ownership \\\n  sign-validator-ownership \\\n  --bsc-operator-address ${NEW_VALIDATOR_OPERATOR_ADDR_ON_BSC} \\\n  --from ${BSC_OPERATOR_NAME} \\\n  --chain-id ${CHAIN_ID} \\\n  --ledger\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"${workspace}/bin/bnbcli"),": The path to the ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli")," binary executable. For testnnet, you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"tbnbcli")," instead.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--to ${NEW_VALIDATOR_OPERATOR_ADDR_ON_BSC}"),": Specifies the BSC address to which the new validator operator address\nwill be mapped.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--chain-id ${BC_CHAIN_ID}"),": Specifies the chain ID for the BC(BNB beacon chain). By default, the mainnet chain ID\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Tigris"),". And the testnet chain ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Ganges"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--from ${ACCOUNT_NAME}"),": Specifies the account name from which the sign will be performed. The account should\nbe the operator of the validator created on the Beacon Chain."))),(0,i.kt)("p",null,"And you will get the output like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'TX JSON: {"type":"auth/StdTx","value":{"msg":[{"type":"migrate/ValidatorOwnerShip","value":{"bsc_operator_address":"RXN7r5XZlaljqzp8msZvx6Y6124="}}],"signatures":[{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Ahr+LlBMLgiUFkP75kIuJW1YHrsTy39GeOdV+IaTREDN"},"signature":"AL5mj52s0+tcdoEb6c6PAmqBixuv3XEmrLW3Y1kvUeYgG3RqVvWU/dIVcfxiHHwLGXlcn0X1v00jFrpLIsxtqA==","account_number":"0","sequence":"0"}],"memo":"","source":"0","data":null}}\nSign Message:  {"account_number":"0","chain_id":"Binance-GGG-Ganges","data":null,"memo":"","msgs":[{"bsc_operator_address":"0x45737baf95d995a963ab3a7c9ac66fc7a63ad76e"}],"sequence":"0","source":"0"}\nSign Message Hash:  0x8f7179e7969e497b5f3c006535e55c2fa5bea5d118a8008eddce3fccd1675673\nSignature: 0x00be668f9dacd3eb5c76811be9ce8f026a818b1bafdd7126acb5b763592f51e6201b746a56f594fdd21571fc621c7c0b19795c9f45f5bf4d2316ba4b22cc6da8\nPubKey: 0x021afe2e504c2e08941643fbe6422e256d581ebb13cb7f4678e755f886934440cd\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Signature")," is your ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," for associating to the old validator created on the Beacon Chain."),(0,i.kt)("h3",{id:"commissions"},"Commissions"),(0,i.kt)("img",{src:s,width:"600"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rate"),": The commission rate of the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max Rate"),": The maximum commission rate that the validator can set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max Change Rate"),": The maximum rate change the validator can set to every epoch (1 day).")),(0,i.kt)("h3",{id:"self-delegation"},"Self-delegation"),(0,i.kt)("img",{src:d,width:"600"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Self Delegate Amount"),": The amnout to delegate when creating the validator. The minimal number to input is ",(0,i.kt)("inlineCode",{parentName:"li"},"2001")," -\nfor the minimal self delegation amount is 2000 BNB and extra 1 BNB for locking to a dead address.")),(0,i.kt)("h3",{id:"3-submitting-the-form"},"3. Submitting the form"),(0,i.kt)("p",null,"Once you have filled out all the required information, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," button to submit the transaction."))}k.isMDXComponent=!0}}]);