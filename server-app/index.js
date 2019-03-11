var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('message', function (req,res) {
        console.log(req.body);
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'angular_project'
        });

        // todo var connection = mysql.createConnection({ connConfig });

        connection.connect(function (err) {
            if (err) {
                console.log(err.code);
                console.log(err.fatal);
            } else {
                const q = "select * from `recipe`";
                connection.query(q, null, function (error, results, fields) {
                    connection.end;
                    if (error) {
                        console.log(error.sql);
                    } else {
                        res.json(results);
                    }
                });
            }
        });


    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});


http.listen(8080, function () {
    console.log('listening on *:8080');
});

