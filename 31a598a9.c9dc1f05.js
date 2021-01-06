(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(80)),i={slug:"/ThemesAndDarkMode",title:"Themes and darkMode \ud83c\udf17"},l={unversionedId:"3_Guides/3_2_ThemesAndDarkMode",id:"3_Guides/3_2_ThemesAndDarkMode",isDocsHomePage:!1,title:"Themes and darkMode \ud83c\udf17",description:"This boilerplate handle dark themes and theme overrides",source:"@site/docs/3_Guides/3_2_ThemesAndDarkMode.md",slug:"/ThemesAndDarkMode",permalink:"/react-native-boilerplate/docs/ThemesAndDarkMode",editUrl:"https://github.com/vahesaroyan/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_2_ThemesAndDarkMode.md",version:"current",sidebar:"docs",previous:{title:"Theme \ud83c\udfa8",permalink:"/react-native-boilerplate/docs/Theme"},next:{title:"Splash screen & loading data \ud83d\udcbe",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData"}},s=[{value:"What is the default configuration \u2753",id:"what-is-the-default-configuration-",children:[]},{value:"Create a new theme \ud83e\udde9",id:"create-a-new-theme-\ud83e\udde9",children:[{value:"Basic example",id:"basic-example",children:[]},{value:"Extended example with dark theme",id:"extended-example-with-dark-theme",children:[]}]}],c={rightToc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This boilerplate handle dark themes and theme overrides"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"what-is-the-default-configuration-"},"What is the default configuration \u2753"),Object(o.b)("p",null,"By default, the boilerplate comes with a ",Object(o.b)("inlineCode",{parentName:"p"},"default")," theme and a ",Object(o.b)("inlineCode",{parentName:"p"},"default dark")," theme.\nThe default theme is build around the different files at the root of ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme"),", by default:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Common.js"),Object(o.b)("li",{parentName:"ul"},"Fonts.js"),Object(o.b)("li",{parentName:"ul"},"Gutters.js"),Object(o.b)("li",{parentName:"ul"},"Images.js"),Object(o.b)("li",{parentName:"ul"},"Layout.js"),Object(o.b)("li",{parentName:"ul"},"Variables.js")),Object(o.b)("p",null,"the ",Object(o.b)("inlineCode",{parentName:"p"},"default dark")," theme is located in ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme/themes/default_dark"),"."),Object(o.b)("p",null,"The Boilerplate Theme system is based on layers overriding.",Object(o.b)("br",{parentName:"p"}),"\n","In other words, the ",Object(o.b)("inlineCode",{parentName:"p"},"default"),' theme is the "base theme" of the application.\nOn the top of it, if the ',Object(o.b)("inlineCode",{parentName:"p"},"darkMode")," is on, the base theme is overrided by style classes or variables of the ",Object(o.b)("inlineCode",{parentName:"p"},"default dark")," theme."),Object(o.b)("p",null,"Moreover, if we add a new theme into ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme/themes"),", for example : ",Object(o.b)("inlineCode",{parentName:"p"},"custom"),".\nThe theme system will override the ",Object(o.b)("inlineCode",{parentName:"p"},"default")," theme classes by the ones of ",Object(o.b)("inlineCode",{parentName:"p"},"custom")," theme.\nIf the dark mode is activated, the theme system will try to get a ",Object(o.b)("inlineCode",{parentName:"p"},"custom_dark")," directory if exists, and override the theme too."),Object(o.b)("p",null,"So, the merge of style and variables classes look like this :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"default theme <- custom theme <- custom dark theme (if darkMode = true and theme exist)\n")),Object(o.b)("p",null,"The name of the current theme and if the dark mode is on are stored in redux and persisted in the device. At a given point of the time the state can look like this :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n   theme: 'custom',\n   darkMode: true, // can be null|true|false\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"darkMode")," values can be :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"null (by default) : the darkMode is automatically set depending of the scheme of the device"),Object(o.b)("li",{parentName:"ul"},"true : force the theme to be dark"),Object(o.b)("li",{parentName:"ul"},"false : force the theme to be light")),Object(o.b)("p",null,"There are two Actions availabled to set a new theme :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DefaultTheme")," allow to set the theme from parameters only if the ",Object(o.b)("inlineCode",{parentName:"li"},"state.theme")," is null (used in the initialisation of the app to set the default theme if this is the first time the app is openned or if the data were cleared)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ChangeTheme")," allow to set a given theme (see example bellow)")),Object(o.b)("h2",{id:"create-a-new-theme-\ud83e\udde9"},"Create a new theme \ud83e\udde9"),Object(o.b)("h3",{id:"basic-example"},"Basic example"),Object(o.b)("p",null,"To create a new theme, create a new directory into ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme/themes")," with the name of your theme. For example ",Object(o.b)("inlineCode",{parentName:"p"},"custom"),".\nAdd files with the same names of the default theme files.\nFor example, if ",Object(o.b)("inlineCode",{parentName:"p"},"custom")," theme has to override the primary color, simply create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"Variables")," into ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme/themes/custom")," with the following :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/Theme/themes/custom/Variables.js"',title:'"src/Theme/themes/custom/Variables.js"'}),"const Colors = {\n  primary: 'yellow',\n}\n\nexport default {\n  Colors,\n}\n")),Object(o.b)("p",null,"\ud83d\udea8 After adding a new override file, don't forget to export it into the root file of the ",Object(o.b)("inlineCode",{parentName:"p"},"custom")," directory with the following :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/Theme/themes/custom/index.js"',title:'"src/Theme/themes/custom/index.js"'}),"export { default as Variables } from './Variables'\n")),Object(o.b)("p",null,"\ud83d\udea8 Each time a new theme is create, import it into the root of themes directory with the name of the theme :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/Theme/themes/index.js"',title:'"src/Theme/themes/index.js"'}),"import * as default_dark from './default_dark'\nimport * as custom from './custom' // <-- add this line\n\nexport default {\n  default_dark,\n  custom, // <-- add this line\n}\n")),Object(o.b)("p",null,"That's it ! now you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"ChangeTheme")," action to set the theme in a container for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Containers/Example/index.js"',title:'"src/Containers/Example/index.js"'}),"import React, { useState } from 'react'\nimport { useDispatch, useSelector } from 'react-redux'\nimport { View, Button } from 'react-native'\nimport { useTheme } from '@/Theme'\nimport ChangeTheme from '@/Store/Theme/ChangeTheme'\n\nconst IndexExampleContainer = () => {\n  const { Common, Fonts, Gutters, Layout } = useTheme()\n  const dispatch = useDispatch()\n\n  const changeTheme = ({ theme, darkMode }) => {\n    dispatch(ChangeTheme.action({ theme, darkMode }))\n  }\n\n  return (\n    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>\n      <View\n        style={[\n          Layout.row,\n          Layout.rowHCenter,\n          Gutters.smallHPadding,\n          Gutters.largeVMargin,\n          Common.backgroundPrimary,\n        ]}\n      >\n        <Button onPress={() => changeTheme({ theme: 'custom' })} title=\"set theme custom\" />\n        <Button onPress={() => changeTheme({ theme: 'default' })} title=\"set theme default\" />\n      </View>\n    </View>\n  )\n}\nexport default IndexExampleContainer\n")),Object(o.b)("h3",{id:"extended-example-with-dark-theme"},"Extended example with dark theme"),Object(o.b)("p",null,"After adding a new theme, to handle the dark theme of it, the same way the new theme was created, the dark will be. \ud83d\ude0e",Object(o.b)("br",{parentName:"p"}),"\n","So, the first step is to create the ",Object(o.b)("inlineCode",{parentName:"p"},"src/Theme/themes/custom_dark")," directory. This theme will override the default and the custom theme by :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"adding a new color"),Object(o.b)("li",{parentName:"ul"},"override the React Navigation primary color"),Object(o.b)("li",{parentName:"ul"},"apply the new color by adding a border on the ",Object(o.b)("inlineCode",{parentName:"li"},"backgroundPrimary")," class.")),Object(o.b)("p",null,"Let's create the following files :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/Variables.js"',title:'"src/Theme/themes/custom_dark/Variables.js"'}),"const Colors = {\n  orange: 'orange', // adding a new color \u2705\n}\n\nconst NavigationColors = {\n  primary: 'red', // override the React Navigation primary color \u2705\n}\n\nexport default {\n  Colors,\n  NavigationColors,\n}\n\n")),Object(o.b)("p",null,"And, "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/Common.js"',title:'"src/Theme/themes/custom_dark/Common.js"'}),"import { StyleSheet } from 'react-native'\n\nexport default function ({ Colors }) {\n  return StyleSheet.create({\n    backgroundPrimary: {\n      backgroundColor: Colors.primary,\n      borderColor: Colors.orange, // apply the new color by adding a border on the `backgroundPrimary` class \u2705\n    },\n  })\n}\n")),Object(o.b)("p",null,"\ud83d\udea8 After adding a new override file, don't forget to export it into the root file of the ",Object(o.b)("inlineCode",{parentName:"p"},"custom_dark")," directory with the following :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/index.js"',title:'"src/Theme/themes/custom_dark/index.js"'}),"export { default as Variables } from './Variables'\nexport { default as Common } from './Common'\n")),Object(o.b)("p",null,"\ud83d\udea8 Each time a new theme is create, import it into the root of themes directory with the name of the theme :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Theme/themes/index.js"',title:'"src/Theme/themes/index.js"'}),"import * as default_dark from './default_dark'\nimport * as custom from './custom'\nimport * as custom_dark from './custom_dark' // <- add this line\n\nexport default {\n  default_dark,\n  custom,\n  custom_dark, // <- add this line\n}\n")),Object(o.b)("p",null,"You can add extra buttons to the ",Object(o.b)("inlineCode",{parentName:"p"},"ExampleContainer")," below to test it :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/Containers/Example/index.js"',title:'"src/Containers/Example/index.js"'}),'...\nconst ExampleContainer = () => {\n  ...\n  return (\n    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>\n      <View\n        style={[\n          Layout.row,\n          Layout.rowHCenter,\n          Gutters.smallHPadding,\n          Gutters.largeVMargin,\n          Common.backgroundPrimary,\n        ]}\n      >\n        <Button onPress={() => changeTheme({ theme: \'custom\' })} title="set theme custom" />\n        <Button onPress={() => changeTheme({ theme: \'default\' })} title="set theme default" />\n        <Button onPress={() => changeTheme({ darkMode: null })} title="Dark auto" /> {/* <- add this line */}\n        <Button onPress={() => changeTheme({ darkMode: true })} title="set to Dark" /> {/* <- add this line */}\n        <Button onPress={() => changeTheme({ darkMode: false })} title="set to Light" /> {/* <- add this line */}\n      </View>\n    </View>\n  )\n}\n')),Object(o.b)("p",null,"That's it ! you can now enjoy multi theming and dark mode ! \ud83d\udc4f "))}m.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),b=a,u=d["".concat(i,".").concat(b)]||d[b]||h[b]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);