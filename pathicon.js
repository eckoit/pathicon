define(['text',  'require'], function(text, require){

	function to_svg(path_str, opts, cb) {

		if (!opts.id) throw new Exception('please provide an id');
		if (!opts.height)  opts.height = 32;
		if (!opts.width)   opts.width  = 32;
		
		if (!opts['padding-top'])   opts['padding-top'] = 0;
		if (!opts['padding-right']) opts['padding-right'] = 0;
		if (!opts['padding-bottom']) opts['padding-bottom'] = 0;
		if (!opts['padding-left']) opts['padding-left'] = 0;
		
		if (!opts.fill)    opts.fill  = '#000';

		require(['raphael'], function(raphael) {
			var result =  {};
	        result.paper = Raphael(opts.id, opts.width, opts.height);
	        result.path  = result.paper.path(path_str).attr({fill: opts.fill, stroke: "none"});
	        result.box   = result.path.getBBox();       			

			result.paper.setViewBox(result.box.x, result.box.y, result.box.width, result.box.height);	
			cb(null, result);
		});
	}



    function parse(name) {
        var parts = name.split('?'),
            resource = parts[0],
            opts = {};

        if(parts[1]) {
        	var opt_arr = parts[1].split(',');

        	for (var i=0; i < opt_arr.length; i++) {
        		var name_val = opt_arr[i].split('=');
        		if (name_val.length === 2) {
        			opts[name_val[0]] = name_val[1];
        		}
        	}
        }

        return {
            resource: resource,
	            opts : opts
        };
    }

    function setElementSize(opts, box) {
		if (!opts.height) opts.height = 32;
		if (!opts.width)  opts.width  = 32;

    	var element = document.getElementById(opts.id);
    	element.style.width = opts.width + 'px';
    	element.style.height = opts.height + 'px';
    }


	return {
	    load: function (name, require, callback, config) {
	    	var parsed = parse(name);
            var text_url = 'text!' + parsed.resource + '.path';
            require([text_url], function(path_str) {	    
				if (config.isBuild) {
					callback(null);
				} else {
					var result = to_svg(path_str, parsed.opts, function(err, result){
						setElementSize(parsed.opts, result.box );
						callback(result);
					});
				}
            });
	    }
	};
});