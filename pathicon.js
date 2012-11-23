define(['text', 'require'], function(text, require){




	return {
	    write: function (pluginName, moduleName, writeBuild) {

	    },
	    load: function (name, parentRequire, onLoad, config) {
	    	console.log(config);
	    }
	};
});