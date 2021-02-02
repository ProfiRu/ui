(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1089:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1090);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));const parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1091:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(357).configure)([__webpack_require__(1092),__webpack_require__(1093)],module,!1)}).call(this,__webpack_require__(106)(module))},1092:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1092},1093:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":1100};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1093},1095:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(475),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(476),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,'.Button-module__button-3eD-G {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.Button-module__button--primary-3pcos {\n  color: white;\n  background-color: #1ea7fd;\n}\n.Button-module__button--secondary-1Xx3- {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.Button-module__button--small-1SMLf {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.Button-module__button--medium-3nshQ {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.Button-module__button--large-2rEXN {\n  font-size: 16px;\n  padding: 12px 24px;\n}',"",{version:3,sources:["webpack://./src/components/Button/Button.module.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",sourcesContent:['.button {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"Button-module__button-3eD-G","button--primary":"Button-module__button--primary-3pcos","button--secondary":"Button-module__button--secondary-1Xx3-","button--small":"Button-module__button--small-1SMLf","button--medium":"Button-module__button--medium-3nshQ","button--large":"Button-module__button--large-2rEXN"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},1100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),clsx_m=__webpack_require__(474),Button_module=__webpack_require__(207),Button_module_default=__webpack_require__.n(Button_module);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=Object(react.forwardRef)((function(_ref,ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,className=_ref.className,children=_ref.children,props=_objectWithoutProperties(_ref,["variant","isLoading","size","className","children"]);return react_default.a.createElement("button",_extends({ref:ref,className:Object(clsx_m.a)(Button_module_default.a.button,Button_module_default.a["button--".concat(size)],Button_module_default.a["button--".concat(variant)],className)},props),isLoading?"Loading...":children)})),components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary"'}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:'"large" | "small" | "normal"'}},isLoading:{defaultValue:{value:!1},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:components_Button};var Button_stories_Template=function Template(args){return react_default.a.createElement(components_Button,args)},Primary=Button_stories_Template.bind({});Primary.args={children:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={variant:"secondary",children:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",children:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",children:"Button"}},207:function(module,exports,__webpack_require__){var api=__webpack_require__(1094),content=__webpack_require__(1095);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},479:function(module,exports,__webpack_require__){__webpack_require__(480),__webpack_require__(652),__webpack_require__(653),__webpack_require__(811),__webpack_require__(1030),__webpack_require__(1063),__webpack_require__(1068),__webpack_require__(1080),__webpack_require__(1082),__webpack_require__(1087),__webpack_require__(1089),module.exports=__webpack_require__(1091)},554:function(module,exports){},602:function(module,exports){},653:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(357)}},[[479,1,2]]]);
//# sourceMappingURL=main.75d2667d3da697605d5b.bundle.js.map