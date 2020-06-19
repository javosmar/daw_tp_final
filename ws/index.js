var PORT = 3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


//EJ 12
app.get('/devices', function(req, res, next) {
    mysql.query('SELECT * FROM Devices', function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

app.get('/devices/:id', function(req, res, next) {
    mysql.query('SELECT * FROM Devices WHERE id=?', [req.params.id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});

// TP final 
app.get('/ws/devices/', function(req, res, next) { // /ws/devices?filter=X    
    let filtro;
    let valor = Number(req.query.filter);
    switch (valor) {
        case 0:
            filtro = 'SELECT * FROM Devices';
            break;
        case 1:
            filtro = 'SELECT * FROM Devices WHERE type=0';
            break;
        case 2:
            filtro = 'SELECT * FROM Devices WHERE type=1';
            break;
        default:
            break;
    }
    mysql.query(filtro, [valor - 1], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });
});

app.post('/devices', function(req, res, next) {
    st = 0;
    if (req.body.state)
        st = 1;
    id = req.body.id.split("_")[1]; // viene dev_xx
    mysql.query('UPDATE Devices SET state=? WHERE id=?', [st, id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});


app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto " + PORT);
});