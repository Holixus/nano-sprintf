"use strict";

module.exports = function sprintf(fmt, a, b) {
	var re = /%(-?\d*)([sdxXb])/g,
	    args = arguments, index = 0;

	function justify(str, width) {
		var fill = (width < 0 ? -width : width ) - str.length;
		if (fill < 0)
			fill = 0;
		fill = '                                                                                                                            '.slice(0, fill);
		return width < 0 ? str + fill : fill + str;
	}

	function to_string(o) {
		switch (typeof o) {
		case 'string':    return o;
		case 'undefined': return 'undefined';
		case 'function':
		case 'Boolean':
		case 'number':    return o.toString();
		default: // 'object'
			if (o === null)
				return 'null';
		}
		return o.toString ? o.toString() : '[Object]';
	}

	return fmt.replace(re, function (match, width, type, offset, string) {
		var a = args[++index];
		if (type === 's')
			a = to_string(a);
		else {
			a = parseInt(a).toString([10, 16, 16, 2]['dxXb'.indexOf(type)]);
			if (type === 'X')
				a = a.toUpperCase();
		}
		return justify(a, width | 0);
	});
};
