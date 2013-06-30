var LiveCtl = function(){
    this.sockets = {};

    this.addSocket = function(socket){
        this.sockets[socket.id] = socket;
    };

    this.removeSocket = function(socket){
        delete this.sockets[socket.id];
    };

};

LiveCtl.prototype.writeToSockets = function(data){
    Object.keys(this.sockets).map(function(id){
        this.sockets[id].emit('data', {
            'metronomeVal': data
        });
    }.bind(this));
};

LiveCtl.prototype.tick = function(){
    this.writeToSockets(0);
};

LiveCtl.prototype.tock = function(){
    this.writeToSockets(1);
};

module.exports = LiveCtl;