Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ModelOperations=function(){function ModelOperations(model){_classCallCheck(this,ModelOperations);this._model=model;}_createClass(ModelOperations,[{key:"indexes",value:function indexes(_indexes){this._indexes=_indexes;return this;}},{key:"history",value:function history(fields){this._history=fields;return this;}},{key:"workflow",value:function workflow(_workflow){this._workflow=_workflow;return this;}},{key:"importMappings",value:function importMappings(mappings){this._importMappings=mappings;return this;}},{key:"referredComputations",value:function referredComputations(computation){this._referredComputations=computation;return this;}},{key:"saveComputations",value:function saveComputations(computations){this._saveComputations=computations;return this;}}],[{key:"of",value:function of(model){return new ModelOperations(model);}}]);return ModelOperations;}();exports.default=ModelOperations;