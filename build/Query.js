Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _PureFunctions=require("./PureFunctions");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Query=function(){function Query(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},id=_ref.id,fields=_ref.fields,filter=_ref.filter,group=_ref.group,skipQueryGroupInAggregate=_ref.skipQueryGroupInAggregate,aggregates=_ref.aggregates,fieldAggregates=_ref.fieldAggregates,sort=_ref.sort,unwind=_ref.unwind,param=_ref.param,paramValue=_ref.paramValue,relationValue=_ref.relationValue,limit=_ref.limit,skip=_ref.skip,scalar=_ref.scalar,scope=_ref.scope,only=_ref.only,data=_ref.data,dataWhenNull=_ref.dataWhenNull,onResult=_ref.onResult,modifyNativeQuery=_ref.modifyNativeQuery,metadata=_ref.metadata,skipData=_ref.skipData,skipAggregates=_ref.skipAggregates,globalCacheKey=_ref.globalCacheKey;_classCallCheck(this,Query);this._query=true;this._id=id;this._fields=fields;this._filter=filter;this._group=group;this._skipQueryGroupInAggregate=skipQueryGroupInAggregate;this._aggregates=aggregates;this._fieldAggregates=fieldAggregates;this._sort=sort;this._unwind=unwind;this._param=param;this._paramValue=paramValue;this._relationValue=relationValue;this._limit=limit;this._skip=skip;this._scalar=scalar;this._scope=scope;this._only=only;this._data=data;this._dataWhenNull=dataWhenNull;this._onResult=onResult;this._metadata=metadata;this._skipData=skipData;this._skipAggregates=skipAggregates;this._globalCacheKey=globalCacheKey;this._modifyNativeQuery=modifyNativeQuery;}_createClass(Query,[{key:"clone",value:function clone(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},id=_ref2.id,fields=_ref2.fields,filter=_ref2.filter,group=_ref2.group,skipQueryGroupInAggregate=_ref2.skipQueryGroupInAggregate,aggregates=_ref2.aggregates,fieldAggregates=_ref2.fieldAggregates,sort=_ref2.sort,unwind=_ref2.unwind,param=_ref2.param,paramValue=_ref2.paramValue,relationValue=_ref2.relationValue,limit=_ref2.limit,skip=_ref2.skip,scalar=_ref2.scalar,scope=_ref2.scope,only=_ref2.only,data=_ref2.data,dataWhenNull=_ref2.dataWhenNull,onResult=_ref2.onResult,modifyNativeQuery=_ref2.modifyNativeQuery,metadata=_ref2.metadata,skipData=_ref2.skipData,skipAggregates=_ref2.skipAggregates,globalCacheKey=_ref2.globalCacheKey;return new Query({id:id!==undefined?id:this._id,fields:fields!==undefined?fields:this._fields,filter:filter!==undefined?filter:this._filter,group:group!==undefined?group:this._group,skipQueryGroupInAggregate:skipQueryGroupInAggregate!==undefined?skipQueryGroupInAggregate:this._skipQueryGroupInAggregate,aggregates:aggregates!==undefined?aggregates:this._aggregates,fieldAggregates:fieldAggregates!==undefined?fieldAggregates:this._fieldAggregates,sort:sort!==undefined?sort:this._sort,unwind:unwind!==undefined?unwind:this._unwind,param:param!==undefined?param:this._param,paramValue:paramValue!==undefined?paramValue:this._paramValue,relationValue:relationValue!==undefined?relationValue:this._relationValue,limit:limit!==undefined?limit:this._limit,skip:skip!==undefined?skip:this._skip,scalar:scalar!==undefined?scalar:this._scalar,scope:scope!==undefined?scope:this._scope,only:only!==undefined?only:this._only,data:data!==undefined?data:this._data,dataWhenNull:dataWhenNull!==undefined?dataWhenNull:this._dataWhenNull,onResult:onResult!==undefined?onResult:this._onResult,modifyNativeQuery:modifyNativeQuery!==undefined?modifyNativeQuery:this._modifyNativeQuery,metadata:metadata!==undefined?metadata:this._metadata,skipData:skipData!==undefined?skipData:this._skipData,skipAggregates:skipAggregates!==undefined?skipAggregates:this._skipAggregates,globalCacheKey:globalCacheKey!==undefined?globalCacheKey:this._globalCacheKey});}},{key:"id",value:function id(_id){return this.clone({id:_id});}},{key:"fields",value:function fields(_fields){return this.clone({fields:_fields});}},{key:"addFields",value:function addFields(fields){return this.clone({fields:(0,_PureFunctions.getMergedFields)(this._fields,fields)});}},{key:"filter",value:function filter(_filter){return this.clone({filter:_filter});}},{key:"addFilter",value:function addFilter(filter){return this.clone({filter:(0,_PureFunctions.getMergedFilter)(this._filter,filter)});}},{key:"group",value:function group(_group){return this.clone({group:_group});}},{key:"aggregates",value:function aggregates(_aggregates){return this.clone({aggregates:_aggregates});}},{key:"fieldAggregates",value:function fieldAggregates(_fieldAggregates){return this.clone({fieldAggregates:_fieldAggregates});}},{key:"sort",value:function sort(_sort){return this.clone({sort:_sort});}},{key:"unwind",value:function unwind(_unwind){return this.clone({unwind:_unwind});}},{key:"param",value:function param(_param){return this.clone({param:_param});}},{key:"paramValue",value:function paramValue(_paramValue){return this.clone({paramValue:_paramValue});}},{key:"relationValue",value:function relationValue(_relationValue){return this.clone({relationValue:_relationValue});}},{key:"limit",value:function limit(_limit){return this.clone({limit:_limit});}},{key:"skip",value:function skip(_skip){return this.clone({skip:_skip});}},{key:"scalar",value:function scalar(_scalar){return this.clone({scalar:_scalar});}},{key:"scope",value:function scope(_scope){return this.clone({scope:_scope});}},{key:"only",value:function only(){return this.clone({only:true});}},{key:"data",value:function data(_data){return this.clone({data:_data});}},{key:"dataWhenNull",value:function dataWhenNull(_dataWhenNull){return this.clone({dataWhenNull:_dataWhenNull});}},{key:"isPubic",value:function isPubic(){return this._scope==="public";}},{key:"onResult",value:function onResult(_onResult){return this.clone({onResult:_onResult});}},{key:"modifyNativeQuery",value:function modifyNativeQuery(_modifyNativeQuery){return this.clone({modifyNativeQuery:_modifyNativeQuery});}},{key:"metadata",value:function metadata(_metadata){return this.clone({metadata:_metadata});}},{key:"skipData",value:function skipData(_skipData){return this.clone({skipData:_skipData});}},{key:"skipAggregates",value:function skipAggregates(_skipAggregates){return this.clone({skipAggregates:_skipAggregates});}},{key:"globalCache",value:function globalCache(globalCacheKey){return this.clone({globalCacheKey:globalCacheKey});}},{key:"skipQueryGroupInAggregate",value:function skipQueryGroupInAggregate(_skipQueryGroupInAggregate){return this.clone({skipQueryGroupInAggregate:_skipQueryGroupInAggregate});}}],[{key:"of",value:function of(id){return new Query({id:id});}}]);return Query;}();exports.default=Query;