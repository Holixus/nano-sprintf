"use strict";

const strf_zeros  = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      strf_spaces = '                                                                                                  ';

module.exports = function sprintf(fmt, a, b)
{
	var re = /%(-?\d+(?:\.?\d+)?)?([sdfxXb])/g,
	    args = arguments, index = 0;

	function justify(str, width) {
		var ws = width.split('.'),
		    dotw = +(ws[1] | 0);
		width = +ws[0];
		if (width < 0) {
			var is_left = 1;
			width *= -1;
		}
		if (dotw) {
			ss = str.split('.');
			if (!ss[1])
				str += '.00000000000000000000000000000'.slice(0, dotw + 1);
			else {
				var dot_pad = dotw - ss[1].length;
				if (dot_pad > 0)
					str += '000000000000000000000000000000'.slice(0, dot_pad);
			}
			width += dotw + 1;
		}
		var fill = width - str.length;
		if (fill < 0)
			fill = 0;
		fill = (ws[0].slice(0, 1) == '0' ? strf_zeros : strf_spaces).slice(0, fill);
		return is_left ? str + fill : fill + str;
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
			a = (+a).toString([10, 10, 16, 16, 2]['dfxXb'.indexOf(type)]);
			if (type === 'X')
				a = a.toUpperCase();
		}
		return justify(a, width || '');
	});
};
