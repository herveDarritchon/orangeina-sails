var socket = io.connect('http://localhost:1337');
socket.on('connect', function() {
	socket.request('/session',{}, function(sessions) {console.log("Sessions :",sessions);});

	socket.on('message', function(message) {
		console.log("Got message:",message);
	});

});
