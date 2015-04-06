var sys = require('sys');
var exec = require('child_process').exec;
var child;

exec("xprop -id `xdotool getwindowfocus`", function (error, stdout, stderr) {
	console.log(stdout);
});

exec("pwd", function (error, stdout, stderr) {
	console.log(stdout);
});
