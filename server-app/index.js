// const app = require('express')();
const express = require('express');
const cors = require('cors');
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




app.post('/contact', function (req, res) {
    console.log(req.body);
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'angular_project'
    });


    connection.connect(function (err) {
        if (err) {
            console.log(err.code);
            console.log(err.fatal);
        } else {
            //save in sql
            connection.query('INSERT INTO contact (name,email,phone) VALUES (?)', req.body, function (error, results, fields) {

                if (error) throw error;

            });
            //write in file
            /*const fs = require('fs');
            fs.writeFile("/savedFiles/test.txt", "name: " + req.body.name + ' email:' + req.body.email + ' phone:' + req.body.phone, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");

                res.send('Data saved successfully');
            });*/

        }
    });



});
