var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server, {
        'log': true
    }),
    fs = require('fs'),
    midi = require('midi'),
    LiveSync = require('./lib/livesync');

var version = 1,
    midiInput;

var liveSync = new LiveSync();

app.use("/js", express.static(__dirname + '/web/js'));
app.use("/css", express.static(__dirname + '/web/css'));
app.use(express.bodyParser());

// Web app routes

app.get('/', function(req, res){
    fs.readFile(__dirname + "/web/index.html", "UTF-8", function(err, data){
        res.send(data);
    });
});

// API routes

io.sockets.on('connection', function (socket) {
    liveSync.addSocket(socket);
    socket.on('disconnect', function(){
        liveSync.removeSocket(socket);
    });
});

// init and run

midiInput = new midi.input();
midiInput.openVirtualPort("LiveSync");
midiInput.on('message', function(time, message){
    if (message[0] === 176){
        if (message[1] === 50 && message[2] > 0){
            liveSync.tick();
        }
        if (message[1] === 51 && message[2] > 0){
            liveSync.tock();
        }
    }
});

// initialize web server stuff

server.listen(8000);
console.log('listening');
