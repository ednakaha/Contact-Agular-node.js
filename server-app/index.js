// const app = require('express')();
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const PORT = 8888;
const app = express();
app.use(cors());
app.use(express.json());
/*
var sql = require("mysql");
const fs = require('fs');
const rl = require('readline');
const dns = require('dns');
*/


//Setting up server
var server = app.listen(PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});



//todo config 
var connConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular_project'
}

app.post('/contact', function (req, res) {
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
            const q = "INSERT INTO `contact` set ?";
            connection.query(q, req.body, function (error, results, fields) {
                // write to file before throw error, if there is an error
                connection.end;
                const fileRowData = "name: " + req.body.name + ' email:' + req.body.email + ' phone:' + req.body.phone;
                fs.writeFile("test.txt", fileRowData, function (err) {
                    if (err) {
                        res.status(500).json('error');
                    }

                    res.json('Data saved successfully');
                });

                if (error) {
                    console.log(error.sql);
                }
            });
        }
    });
});



app.post('/recipe', function (req, res) {
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
            const q = "INSERT INTO `recipe` set ?";
            connection.query(q, req.body, function (error, results, fields) {
                connection.end; 
                if (error) {
                    console.log(error.sql);
                } else {
                    res.json('Recipe saved successfully');
                }
            });
        }
    });
});

app.get('/recipe', function (req, res) {
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