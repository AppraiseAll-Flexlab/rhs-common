Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _class,_temp,_initialiseProps;var _mobx=require("mobx");var _socket=require("socket.io-client");var _socket2=_interopRequireDefault(_socket);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var GpsStore=(_temp=_class=function GpsStore(props){_classCallCheck(this,GpsStore);_initialiseProps.call(this);var config=props.config,trackUserEvents=props.trackUserEvents;this.config=config;this.trackUserEvents=trackUserEvents;this.store=_mobx.observable.map({});},_initialiseProps=function _initialiseProps(){var _this=this;this.setUser=function(user){_this.user=user;};this.disconnectSocket=function(){var imeis=_this.store.keys();for(var _iterator=imeis,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var imei=_ref;var currentImeiInfo=_this.getImeiInfo({imei:imei});currentImeiInfo&&currentImeiInfo.set("subscribed",false);}_this.socket&&_this.socket.close();};this.connectSocket=function(){_this.socket&&_this.socket.open();};this.subscribeSocket=function(imeiInfo){_this.socket.emit("subscribe",imeiInfo,function(err,data){var currentImeiInfo=_this.getImeiInfo(data);currentImeiInfo&&currentImeiInfo.merge(_extends({},data,{subscribed:true}));});};this.unSubscribeSocket=function(imeiInfo){_this.socket&&_this.socket.emit("unsubscribe",imeiInfo);};this.connectToSocket=function(){var url=_this.config.url;_this.socket=_socket2.default.connect(url,{transports:["websocket"],reconnection:true});_this.socket.on("connect",function(_){console.log(">>>>>>>>>>>>>socket connected at client>>>>>>>>",_this.socket.id);var imeis=_this.store.keys();for(var _iterator2=imeis,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var imei=_ref2;_this.subscribeSocket({imei:imei});}_this.trackUserEvents&&_this.trackUserEvents({event:"GpsStore Socket Connect",eventData:{id:_this.socket.id},user:_this.user});});_this.socket.on("location",function(data){var currentImeiInfo=_this.getImeiInfo(data);currentImeiInfo&&currentImeiInfo.merge(data);});_this.socket.on("disconnect",function(err){console.log(">>>>>>>>>>>>>>>socket disconnected at client");_this.trackUserEvents&&_this.trackUserEvents({event:"GpsStore Socket Disconnect",eventData:{err:err},user:_this.user});});_this.socket.on("error",function(err){console.log("Error in on connect socket ::: ",err);_this.trackUserEvents&&_this.trackUserEvents({event:"GpsStore Socket Error",eventData:{err:err},user:_this.user});});_this.socket.on("connect_error",function(err){console.log("Socket Connect Error ::: ",err);});};this.getImeiInfo=function(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},imei=_ref3.imei;return imei&&_this.store.get(imei);};this.getInfo=function(props,propName){var imeiInfo=_this.getImeiInfo(props);return imeiInfo&&imeiInfo.get(propName);};this.getLocation=function(props){return _this.getInfo(props,"location");};this.getCoveredStops=function(props){return _this.getInfo(props,"coveredStops");};this.isSubscribed=function(props){return _this.getInfo(props,"subscribed");};this.emitData=function(event,data,callback){_this.socket&&_this.socket.emit(event,data,callback);};this.subscribe=function(_ref4){var imei=_ref4.imei,uid=_ref4.uid;if(!imei){return;}var imeiInfo=_this.store.get(imei);if(imeiInfo===undefined){_this.store.set(imei,_mobx.observable.map({uid:[uid]}));if(!_this.socket){_this.connectToSocket();}else{_this.subscribeSocket({imei:imei});}}else{var uidInfo=imeiInfo.get("uid");uidInfo.push(uid);}};this.unsubscribe=function(_ref5){var imei=_ref5.imei,uid=_ref5.uid;if(!imei){return;}var imeiInfo=_this.store.get(imei);var uidInfo=imeiInfo&&imeiInfo.get("uid");if(uidInfo){for(var i=0;i<uidInfo.length;i++){if(uidInfo[i]===uid){uidInfo.splice(i,1);break;}}}if(!uidInfo||!uidInfo.length){_this.store.delete(imei);_this.unSubscribeSocket({imei:imei});}};},_temp);exports.default=GpsStore;