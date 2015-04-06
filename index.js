var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');
var child;

var wm_class = /WM_CLASS\(STRING\) = (.*)/;

var xprop_info = function (xprop) {
	var cls = (xprop.match(wm_class) || {})[1];
	return cls;
};

var log_focused_window = function () {
	exec("xprop -id `xdotool getwindowfocus`", function (error, stdout, stderr) {
		var to_log = xprop_info(stdout);
		if (to_log) {
			fs.appendFile("/home/g/logs/log.txt", to_log+"\n", function (err) {
				if (err) {
					console.log(err);
					throw new Error();
				}
			});
		}
	});
};

setInterval(log_focused_window, 99); 

