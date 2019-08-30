const express = require('express');

const Races = require('../races/races-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/races', (req, res) => {
    Races.getAll()
        .then(races => {
            res.status(200).json(races);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = server;