Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _PureFunctions=require("./PureFunctions");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Event=function(){function Event(type){_classCallCheck(this,Event);this._type=type;}_createClass(Event,[{key:"model",value:function model(_model){this._model=_model;return this;}},{key:"onChange",value:function onChange(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _resolveOnChange=(0,_PureFunctions.resolveOnChange)(args),_onChange=_resolveOnChange._onChange,_default=_resolveOnChange._default;this._onChange=_onChange;this._default=_default;return this;}},{key:"operation",value:function operation(){for(var _len2=arguments.length,operations=Array(_len2),_key2=0;_key2<_len2;_key2++){operations[_key2]=arguments[_key2];}if(operations&&operations.length){this._operation=operations.reduce(function(accum,op){return accum[op]=1&&accum;},{});}return this;}},{key:"data",value:function data(fields){this._data=fields;return this;}},{key:"when",value:function when(fn){this._when=fn;return this;}},{key:"affectedRows",value:function affectedRows(fn,multiple){this._affectedRows=fn;this._multiple=multiple;return this;}}]);return Event;}();exports.default=function(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"postSave";return new Event(type);};