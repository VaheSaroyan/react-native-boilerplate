(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(80)),i={slug:"/AddALangTranslation",title:"Add a lang translation \ud83c\udf10"},l={unversionedId:"3_Guides/3_5_AddALangTranslation",id:"3_Guides/3_5_AddALangTranslation",isDocsHomePage:!1,title:"Add a lang translation \ud83c\udf10",description:"The boilerplate includes an i18n feature to store and translate String data.",source:"@site/docs/3_Guides/3_5_AddALangTranslation.md",slug:"/AddALangTranslation",permalink:"/react-native-boilerplate/docs/AddALangTranslation",editUrl:"https://github.com/vahesaroyan/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_5_AddALangTranslation.md",version:"current",sidebar:"docs",previous:{title:"Redux store \ud83d\uddc3\ufe0f",permalink:"/react-native-boilerplate/docs/ReduxStore"},next:{title:"Using Flipper \ud83d\udc1b",permalink:"/react-native-boilerplate/docs/UsingFlipper"}},c=[{value:"Add a new language",id:"add-a-new-language",children:[]}],u={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The boilerplate includes an i18n feature to store and translate String data.\nThe package used is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.i18next.com/"}),"i18next")," you can use their documentation for not included functionnalities."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"add-a-new-language"},"Add a new language"),Object(o.b)("p",null,"All languages files are located in ",Object(o.b)("inlineCode",{parentName:"p"},"src/Translations/resources"),". By default, there is the ",Object(o.b)("inlineCode",{parentName:"p"},"en.js")," file.\nTo add a new language just ",Object(o.b)("inlineCode",{parentName:"p"},"cp en.js fr.js")," and export it in : ",Object(o.b)("inlineCode",{parentName:"p"},"src/Translations/resources/index")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export { default as en } from './en'\nexport { default as fr } from './fr'\n")),Object(o.b)("p",null,"Now you can translate all keys of the ",Object(o.b)("inlineCode",{parentName:"p"},"fr.js")," file :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  welcome: 'Bienvenue sur le React Native Boilerplate de TheCodingMachine',\n  actions: {\n    continue: 'Continuer',\n  },\n  example: {\n    helloUser: 'Je suis un faux utilisateur, mon nom est {{name}}',\n    labels: {\n      userId: \"Entrer un id d'utilisateur\",\n    },\n  },\n}\n")),Object(o.b)("p",null,"That's it ! Now you can change the language with ",Object(o.b)("inlineCode",{parentName:"p"},"i18n.changeLanguage('fr')")))}s.isMDXComponent=!0},80:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);