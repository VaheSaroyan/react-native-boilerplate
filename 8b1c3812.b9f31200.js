(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/RTW-74ba28348fd8ec78a501c0009d9e640b.png"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(80)),i={slug:"/ReduxStore",title:"Redux store \ud83d\uddc3\ufe0f"},b={unversionedId:"3_Guides/3_4_ReduxStore",id:"3_Guides/3_4_ReduxStore",isDocsHomePage:!1,title:"Redux store \ud83d\uddc3\ufe0f",description:"The store section is now really easy to use thanks to Redux-tookit and our Redux-tookit-wrapper.",source:"@site/docs/3_Guides/3_4_ReduxStore.md",slug:"/ReduxStore",permalink:"/react-native-boilerplate/docs/ReduxStore",editUrl:"https://github.com/vahesaroyan/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_4_ReduxStore.md",version:"current",sidebar:"docs",previous:{title:"Splash screen & loading data \ud83d\udcbe",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData"},next:{title:"Add a lang translation \ud83c\udf10",permalink:"/react-native-boilerplate/docs/AddALangTranslation"}},l=[{value:"Architecture",id:"architecture",children:[]},{value:"Slices",id:"slices",children:[]},{value:"Redux-toolkit-wrapper",id:"redux-toolkit-wrapper",children:[{value:"buildAsyncState",id:"buildasyncstate",children:[]},{value:"buildAsyncActions",id:"buildasyncactions",children:[]},{value:"buildAsyncReducers",id:"buildasyncreducers",children:[]},{value:"buildSlice",id:"buildslice",children:[]}]}],o={rightToc:l};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{align:"center"},Object(c.b)("img",{width:"100%",src:a(150).default})),Object(c.b)("p",null,"The store section is now really easy to use thanks to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/"}),"Redux-tookit")," and our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/redux-toolkit-wrapper"}),"Redux-tookit-wrapper"),"."),Object(c.b)("h2",{id:"architecture"},"Architecture"),Object(c.b)("p",null,"The root file include configuration of redux. The two main constants are ",Object(c.b)("inlineCode",{parentName:"p"},"reducers")," and ",Object(c.b)("inlineCode",{parentName:"p"},"persistConfig")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const reducers = combineReducers({\n  startup,\n  user,\n  theme\n})\n\nconst persistConfig = {\n  key: 'root',\n  storage: AsyncStorage,\n  whitelist: ['theme'],\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"whitelist")," includes state to persist (with ",Object(c.b)("inlineCode",{parentName:"li"},"redux-persist"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"reducers")," includes all ",Object(c.b)("inlineCode",{parentName:"li"},"reducer modules"))),Object(c.b)("h2",{id:"slices"},"Slices"),Object(c.b)("p",null,"A slice is a group of actions, states and reducers for a same domain. For example, in this boilerplate, there are tree slices : ",Object(c.b)("inlineCode",{parentName:"p"},"Startup")," ",Object(c.b)("inlineCode",{parentName:"p"},"Theme")," and ",Object(c.b)("inlineCode",{parentName:"p"},"User"),".",Object(c.b)("br",{parentName:"p"}),"\n","In each slice, an ",Object(c.b)("inlineCode",{parentName:"p"},"index.js")," file which combines each store's feature/module (",Object(c.b)("inlineCode",{parentName:"p"},"fetchOne.js")," for the ",Object(c.b)("inlineCode",{parentName:"p"},"User")," slice example).",Object(c.b)("br",{parentName:"p"}),"\n","We've decided to separate each module in one file in order to avoid very large incomprehensible files.\nSo each of them includes its scoped state, his only action and related reducers. "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  initialState: buildAsyncState('fetchOne'),\n  action: buildAsyncActions('user/fetchOne', fetchOneUserService),\n  reducers: buildAsyncReducers({\n    errorKey: 'fetchOne.error',\n    loadingKey: 'fetchOne.loading',\n  }),\n}\n")),Object(c.b)("p",null,"In the ",Object(c.b)("inlineCode",{parentName:"p"},"index.js")," file, all modules are merged in a slice where states, actions, and reducers are merged and placed into it."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const sliceInitialState = {\n  item: {},\n}\n\nexport default buildSlice('user', [FetchOne], sliceInitialState).reducer\n")),Object(c.b)("p",null,"For the ",Object(c.b)("inlineCode",{parentName:"p"},"User")," example, the below state will be created :"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"{\n  user: {\n    item: {},\n    fetchOne: {\n      loading: false,\n      error: null,\n    }   \n }\n}\n")),Object(c.b)("p",null,"Actions will be : ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/pending"),", ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/fulfilled"),", ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/rejected")," prefixed and wrapped by the ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne")," action",Object(c.b)("br",{parentName:"p"}),"\n","For each wrapped action, a reducer is associated."),Object(c.b)("h2",{id:"redux-toolkit-wrapper"},"Redux-toolkit-wrapper"),Object(c.b)("p",null,"The boilerplate includes a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/redux-toolkit-wrapper"}),"wrapper of redux-toolkit")," to make it easier to use. It provides three helpers.\nIf your are not familiar with redux-toolkit, please have a look at their ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/configureStore"}),"documentation"),"."),Object(c.b)("h3",{id:"buildasyncstate"},"buildAsyncState"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncState")," create a loading and error state. You can scope it in a key."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scope"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of the scope"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"undefined")))),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"})," buildAsyncState('fetchOne')\n...\n buildAsyncState()\n")),Object(c.b)("p",null,"Will generate:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"  {\n    fetchOne: {\n      loading: false, \n      error: null,\n    }\n  } \n...\n  {\n    loading: false, \n    error: null,\n  } \n")),Object(c.b)("h3",{id:"buildasyncactions"},"buildAsyncActions"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncActions")," is a wrapper of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/createAsyncThunk"}),Object(c.b)("inlineCode",{parentName:"a"},"createAsyncThunk")),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"actionName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the name of the action"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"undefined")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"action"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"function to launch and await"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"() => {}")))),Object(c.b)("h4",{id:"example-1"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"   buildAsyncActions('user/fetchOne', fetchOneUserService)\n")),Object(c.b)("p",null,"Where fetchOneUserService is an async function.\nSo, when the fetchOneUserService is launched the action ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/pending")," is dispatched.\nWhen the fetchOneUserService is endded the action ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/fulfilled")," is dispatched.\nWhen the fetchOneUserService throw an error the action ",Object(c.b)("inlineCode",{parentName:"p"},"user/fetchOne/rejected")," is dispatched."),Object(c.b)("h3",{id:"buildasyncreducers"},"buildAsyncReducers"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncReducers")," create default reducers based on CRUD logic. It creates three functions : pending, fulfilled and rejected."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pending")," set the ",Object(c.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(c.b)("inlineCode",{parentName:"li"},"true")," and the ",Object(c.b)("inlineCode",{parentName:"li"},"errorKey")," to ",Object(c.b)("inlineCode",{parentName:"li"},"null"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"fulfilled")," replaces ",Object(c.b)("inlineCode",{parentName:"li"},"itemKey")," with the payload (if ",Object(c.b)("inlineCode",{parentName:"li"},"itemKey")," is not ",Object(c.b)("inlineCode",{parentName:"li"},"null"),") and the ",Object(c.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(c.b)("inlineCode",{parentName:"li"},"false")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"rejected")," set the ",Object(c.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(c.b)("inlineCode",{parentName:"li"},"false")," and the ",Object(c.b)("inlineCode",{parentName:"li"},"errorKey")," to payload.")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"itemKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the key of the item state"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'item'")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"loadingKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the key of the loading state"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'loading'")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"errorKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the key of the error state"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'error'")))),Object(c.b)("h4",{id:"example-2"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"buildAsyncReducers({\n    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation\n    loadingKey: 'fetchOne.loading',\n})\n")),Object(c.b)("h3",{id:"buildslice"},"buildSlice"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"buildSlice")," is a wrapper of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/createSlice"}),Object(c.b)("inlineCode",{parentName:"a"},"createSlice")),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the name of the slice"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"undefined")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"modules"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array of all modules"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sliceInitialState"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"initial state for all modules of the slice"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"{}")))),Object(c.b)("h4",{id:"example-3"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"buildSlice('user', [FetchOne], { item: {} } ).reducer\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"For async function you have to use ",Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncState"),", ",Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncActions")," and ",Object(c.b)("inlineCode",{parentName:"p"},"buildAsyncReducers")," from @vahesaroyan/redux-toolkit-wrapper.\nFor no async function you have to use ",Object(c.b)("inlineCode",{parentName:"p"},"createAction")," from redux-toolkit. And follow the example of the slice ",Object(c.b)("inlineCode",{parentName:"p"},"Theme")))))}d.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(i,".").concat(O)]||p[O]||s[O]||c;return a?r.a.createElement(j,b(b({ref:t},o),{},{components:a})):r.a.createElement(j,b({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);