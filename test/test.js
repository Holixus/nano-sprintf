var sprintf = require('../index.js'),
    assert = require('core-assert'),
    json = require('nano-json');

var timer = function (ms, v) {
	return new Promise(function (resolve, reject) {
		var to = setTimeout(function () {
				resolve(v);
			}, ms);
		return { cancel: function () {
			clearTimeout(to);
		}};
	});
};

function massive(name, fn, pairs, sradix, dradix) {
	suite(name, function () {
		for (var i = 0, n = pairs.length; i < n; i += 2)
			(function (args, ret) {
				test(fn.name+'('+json.js2str(args, sradix)+') -> '+json.js2str(ret, dradix)+'', function (done) {
					assert.strictEqual(args instanceof Array ? fn.apply(null, args) : fn.call(null, args), ret);
					done();
				});
			})(pairs[i], pairs[i+1]);
	});
}

massive('spritfs', sprintf, [
	[ '|%-15s|', 'test' ], "|test           |",
	[ '|%15s|', 'test' ], "|           test|",
	[ '|%-15d|', 123 ], "|123            |",
	[ '|%15d|', 123 ], "|            123|",
	[ '|%-15x|', 123 ], "|7b             |",
	[ '|%15x|', 123 ], "|             7b|",
	[ '|%-15X|', 123 ], "|7B             |",
	[ '|%15X|', 123 ], "|             7B|",
	[ '|%-15b|', 123 ], "|1111011        |",
	[ '|%15b|', 123 ], "|        1111011|",
	[ '|%-10s|%7d|', 'test', 555 ], "|test      |    555|",
	[ '|%4s|', 'ertertretert' ], "|ertertretert|",
	[ '|%e|', 'ertertretert' ], "|%e|",
	[ '-- %s --', undefined ], "-- undefined --",
	[ '-- %s --', null ], "-- null --",
	[ '-- %s --', function a(q) { return q*q; } ], "-- function a(q) { return q*q; } --",
	[ '-- %s --', true ], "-- true --",
	[ '-- %s --', 34234 ], "-- 34234 --",
	[ '-- %s --', 1e6 ], "-- 1000000 --",
	[ '-- %s --', {a:1} ], "-- [object Object] --",
	[ '-- %s --', {a:1, toString:undefined} ], "-- [Object] --",
]);
