"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9115],{62128:function(e,t,n){let a;n.d(t,{AccountCtrl:function(){return O},Id:function(){return b},ConfigCtrl:function(){return L},zv:function(){return C},uA:function(){return I},ExplorerCtrl:function(){return V},jb:function(){return K},OptionsCtrl:function(){return j},AV:function(){return v},ThemeCtrl:function(){return Y},ToastCtrl:function(){return ee},WcConnectionCtrl:function(){return $}}),Symbol();let s=Symbol(),r=Object.getPrototypeOf,i=new WeakMap,o=e=>e&&(i.has(e)?i.get(e):r(e)===Object.prototype||r(e)===Array.prototype),l=e=>o(e)&&e[s]||null,c=(e,t=!0)=>{i.set(e,t)},d=e=>"object"==typeof e&&null!==e,u=new WeakMap,f=new WeakSet,[p]=((e=Object.is,t=(e,t)=>new Proxy(e,t),n=e=>d(e)&&!f.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),a=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},s=new WeakMap,r=(e,t,n=a)=>{let i=s.get(e);if((null==i?void 0:i[0])===t)return i[1];let o=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return c(o,!0),s.set(e,[t,o]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(o,t))return;let a=Reflect.get(e,t),s={value:a,enumerable:!0,configurable:!0};if(f.has(a))c(a,!1);else if(a instanceof Promise)delete s.value,s.get=()=>n(a);else if(u.has(a)){let[e,t]=u.get(a);s.value=r(e,t(),n)}Object.defineProperty(o,t,s)}),o},i=new WeakMap,o=[1,1],p=a=>{if(!d(a))throw Error("object required");let s=i.get(a);if(s)return s;let c=o[0],h=new Set,g=(e,t=++o[0])=>{c!==t&&(c=t,h.forEach(n=>n(e,t)))},m=o[1],b=(e=++o[1])=>(m===e||h.size||(m=e,v.forEach(([t])=>{let n=t[1](e);n>c&&(c=n)})),c),w=e=>(t,n)=>{let a=[...t];a[1]=[e,...a[1]],g(a,n)},v=new Map,C=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(h.size){let n=t[3](w(e));v.set(e,[t,n])}else v.set(e,[t])},y=e=>{var t;let n=v.get(e);n&&(v.delete(e),null==(t=n[1])||t.call(n))},I=e=>{h.add(e),1===h.size&&v.forEach(([e,t],n)=>{if(t)throw Error("remove already exists");let a=e[3](w(n));v.set(n,[e,a])});let t=()=>{h.delete(e),0===h.size&&v.forEach(([e,t],n)=>{t&&(t(),v.set(n,[e]))})};return t},E=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),j={deleteProperty(e,t){let n=Reflect.get(e,t);y(t);let a=Reflect.deleteProperty(e,t);return a&&g(["delete",[t],n]),a},set(t,a,s,r){let o=Reflect.has(t,a),c=Reflect.get(t,a,r);if(o&&(e(c,s)||i.has(s)&&e(c,i.get(s))))return!0;y(a),d(s)&&(s=l(s)||s);let h=s;if(s instanceof Promise)s.then(e=>{s.status="fulfilled",s.value=e,g(["resolve",[a],e])}).catch(e=>{s.status="rejected",s.reason=e,g(["reject",[a],e])});else{!u.has(s)&&n(s)&&(h=p(s));let e=!f.has(h)&&u.get(h);e&&C(a,e)}return Reflect.set(t,a,h,r),g(["set",[a],s,c]),!0}},W=t(E,j);i.set(a,W);let L=[E,b,r,I];return u.set(W,L),Reflect.ownKeys(a).forEach(e=>{let t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(W[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),W})=>[p,u,f,e,t,n,a,s,r,i,o])();function h(e={}){return p(e)}function g(e,t,n){let a;let s=u.get(e);s||console.warn("Please use proxy object");let r=[],i=s[3],o=!1,l=i(e=>{if(r.push(e),n){t(r.splice(0));return}a||(a=Promise.resolve().then(()=>{a=void 0,o&&t(r.splice(0))}))});return o=!0,()=>{o=!1,l()}}var m=n(55872);let b={ethereumClient:void 0,setEthereumClient(e){a=e},client(){if(a)return a;throw Error("ClientCtrl has no client set")}},w=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),v={state:w,subscribe:e=>g(w,()=>e(w)),push(e,t){e!==w.view&&(w.view=e,t&&(w.data=t),w.history.push(e))},reset(e){w.view=e,w.history=[e]},replace(e){w.history.length>1&&(w.history[w.history.length-1]=e,w.view=e)},goBack(){if(w.history.length>1){w.history.pop();let[e]=w.history.slice(-1);w.view=e}},setData(e){w.data=e}},C={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>C.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return C.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,n){if(C.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,n);let s=encodeURIComponent(t);return`${a}wc?uri=${s}`},formatUniversalUrl(e,t,n){if(!C.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,n);let s=encodeURIComponent(t);return`${a}/wc?uri=${s}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(C.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){let[t]=e.split("?");localStorage.setItem(C.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(C.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){"u">typeof localStorage&&localStorage.setItem(C.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;let t=null==(e=v.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;let t=null==(e=v.state.data)?void 0:e.SwitchNetwork;if(!t)throw Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag:()=>"u">typeof location&&new URLSearchParams(location.search).has(C.W3M_PREFER_INJECTED_URL_FLAG)},y=h({enabled:"u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),I={state:y,subscribe:e=>g(y.events,()=>e(function(e,t){let n=u.get(e);n||console.warn("Please use proxy object");let[a,s,r]=n;return r(a,s(),void 0)}(y.events[y.events.length-1]))),initialize(){y.enabled&&"u">typeof crypto&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){let t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){let t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){let t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},E=h({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),j={state:E,subscribe:e=>g(E,()=>e(E)),setChains(e){E.chains=e},setStandaloneChains(e){E.standaloneChains=e},setStandaloneUri(e){E.standaloneUri=e},getSelectedChain(){let e=b.client().getNetwork().chain;return e&&(E.selectedChain=e),E.selectedChain},setSelectedChain(e){E.selectedChain=e},setIsStandalone(e){E.isStandalone=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setWalletConnectVersion(e){E.walletConnectVersion=e},setIsPreferInjected(e){E.isPreferInjected=e},setIsAuth(e){E.isAuth=e}},W=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),L={state:W,subscribe:e=>g(W,()=>e(W)),setConfig(e){var t,n,a,s;I.initialize(),j.setStandaloneChains(e.standaloneChains),j.setIsStandalone(!!(null!=(t=e.standaloneChains)&&t.length)||!!e.enableStandaloneMode),j.setIsAuth(!!e.enableAuthMode),j.setIsCustomMobile(!!(null!=(n=e.mobileWallets)&&n.length)),j.setIsCustomDesktop(!!(null!=(a=e.desktopWallets)&&a.length)),j.setWalletConnectVersion(null!=(s=e.walletConnectVersion)?s:1),j.state.isStandalone||(j.setChains(b.client().chains),j.setIsPreferInjected(b.client().isInjectedProviderInstalled()&&C.isPreferInjectedFlag())),e.defaultChain&&j.setSelectedChain(e.defaultChain),C.setWeb3ModalVersionInStorage(),Object.assign(W,e)}},A=h({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),O={state:A,subscribe:e=>g(A,()=>e(A)),getAccount(){let e=b.client().getAccount();A.address=e.address,A.isConnected=e.isConnected},async fetchProfile(e,t){var n;try{A.profileLoading=!0;let a=t??A.address,s=null==(n=j.state.chains)?void 0:n.find(e=>1===e.id);if(a&&s){let t=await b.client().fetchEnsName({address:a,chainId:1});if(t){let n=await b.client().fetchEnsAvatar({name:t,chainId:1});n&&await e(n),A.profileAvatar=n}A.profileName=t}}finally{A.profileLoading=!1}},async fetchBalance(e){try{let t;let{chain:n}=b.client().getNetwork(),{tokenContracts:a}=L.state;n&&a&&(t=a[n.id]),A.balanceLoading=!0;let s=e??A.address;if(s){let e=await b.client().fetchBalance({address:s,token:t});A.balance={amount:e.formatted,symbol:e.symbol}}}finally{A.balanceLoading=!1}},setAddress(e){A.address=e},setIsConnected(e){A.isConnected=e},resetBalance(){A.balance=void 0},resetAccount(){A.address=void 0,A.isConnected=!1,A.profileName=void 0,A.profileAvatar=void 0,A.balance=void 0}},S="https://explorer-api.walletconnect.com";async function P(e,t){let n=new URL(e,S);return n.searchParams.append("projectId",L.state.projectId),Object.entries(t).forEach(([e,t])=>{t&&n.searchParams.append(e,String(t))}),(await fetch(n)).json()}let M={getDesktopListings:async e=>P("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>P("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>P("/w3m/v1/getInjectedListings",e),getAllListings:async e=>P("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${S}/w3m/v1/getWalletImage/${e}?projectId=${L.state.projectId}`,getAssetImageUrl:e=>`${S}/w3m/v1/getAssetImage/${e}?projectId=${L.state.projectId}`};var k=Object.defineProperty,N=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))U.call(t,n)&&R(e,n,t[n]);if(N)for(var n of N(t))D.call(t,n)&&R(e,n,t[n]);return e};let T=C.isMobile(),x=h({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),V={state:x,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=L.state;if("NONE"===e||"ALL"===t&&!e)return x.recomendedWallets;if(C.isArray(e)){let t={recommendedIds:e.join(",")},{listings:n}=await M.getAllListings(t),a=Object.values(n);a.sort((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)),x.recomendedWallets=a}else{let{standaloneChains:e,walletConnectVersion:n,isAuth:a}=j.state,s=e?.join(","),r=C.isArray(t),i={page:1,sdks:a?"auth_v1":void 0,entries:C.RECOMMENDED_WALLET_AMOUNT,chains:s,version:n,excludedIds:r?t.join(","):void 0},{listings:o}=T?await M.getMobileListings(i):await M.getDesktopListings(i);x.recomendedWallets=Object.values(o)}return x.recomendedWallets},async getWallets(e){let t=_({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:a}=L.state,{recomendedWallets:s}=x;if("ALL"===a)return x.wallets;t.search||(s.length?t.excludedIds=s.map(e=>e.id).join(","):C.isArray(n)&&(t.excludedIds=n.join(","))),C.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),j.state.isAuth&&(t.sdks="auth_v1");let{page:r,search:i}=e,{listings:o,total:l}=T?await M.getMobileListings(t):await M.getDesktopListings(t),c=Object.values(o),d=i?"search":"wallets";return x[d]={listings:[...x[d].listings,...c],total:l,page:r??1},{listings:c,total:l}},async getInjectedWallets(){let{listings:e}=await M.getInjectedListings({}),t=Object.values(e);return x.injectedWallets=t,x.injectedWallets},getWalletImageUrl:e=>M.getWalletImageUrl(e),getAssetImageUrl:e=>M.getAssetImageUrl(e),resetSearch(){x.search={listings:[],total:0,page:1}}},B=h({pairingUri:"",pairingError:!1}),$={state:B,subscribe:e=>g(B,()=>e(B)),setPairingUri(e){B.pairingUri=e},setPairingError(e){B.pairingError=e}},H=h({open:!1}),K={state:H,subscribe:e=>g(H,()=>e(H)),open:async e=>new Promise(t=>{let{isStandalone:n,isUiLoaded:a,isDataLoaded:s,isPreferInjected:r,selectedChain:i}=j.state,{isConnected:o}=O.state,{enableNetworkView:l}=L.state;if(n)j.setStandaloneUri(e?.uri),j.setStandaloneChains(e?.standaloneChains),v.reset("ConnectWallet");else if(null!=e&&e.route)v.reset(e.route);else if(o)v.reset("Account");else if(l)v.reset("SelectNetwork");else if(r){b.client().connectConnector("injected",i?.id).catch(e=>console.error(e)),t();return}else v.reset("ConnectWallet");let{pairingUri:c}=$.state;if(a&&s&&(n||c||o))H.open=!0,t();else{let e=setInterval(()=>{let n=j.state,a=$.state;n.isUiLoaded&&n.isDataLoaded&&(n.isStandalone||a.pairingUri||o)&&(clearInterval(e),H.open=!0,t())},200)}}),close(){H.open=!1}};var z=Object.defineProperty,F=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&q(e,n,t[n]);if(F)for(var n of F(t))G.call(t,n)&&q(e,n,t[n]);return e};let X=h({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Y={state:X,subscribe:e=>g(X,()=>e(X)),setThemeConfig(e){let{themeMode:t,themeVariables:n}=e;t&&(X.themeMode=t),n&&(X.themeVariables=Q({},n))}},Z=h({open:!1,message:"",variant:"success"}),ee={state:Z,subscribe:e=>g(Z,()=>e(Z)),openToast(e,t){Z.open=!0,Z.message=e,Z.variant=t},closeToast(){Z.open=!1}};"u">typeof window&&(window.Buffer||(window.Buffer=m.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},29115:function(e,t,n){n.d(t,{Web3Modal:function(){return d}});var a=n(62128),s=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&l(e,n,t[n]);return e};class d{constructor(e){this.openModal=a.jb.open,this.closeModal=a.jb.close,this.subscribeModal=a.jb.subscribe,this.setTheme=a.ThemeCtrl.setThemeConfig,a.ThemeCtrl.setThemeConfig(e),a.ConfigCtrl.setConfig(c({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if("u">typeof window){await n.e(4190).then(n.bind(n,84190));let e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),a.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);