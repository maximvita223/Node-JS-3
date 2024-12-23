const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'count.json');

const count = JSON.parse(fs.readFileSync(pathToFile), 'utf8');

// const countWrite = fs.writeFileSync(pathToFile, JSON.stringify(count, null, 2));
app.get('/', (req, res) => {
    count.countHome++;
    fs.writeFileSync(pathToFile, JSON.stringify(count, null, 2));
    res.send('<h1>Добро пожаловать</h1> <a href="/about">About</a> <p>счетчик просмотров: ' + count.countHome + '</p>');

})

app.get('/about', (req, res) => {
    count.countAbout++;
    fs.writeFileSync(pathToFile, JSON.stringify(count, null, 2));
    res.send('<h1>Добро пожаловать на ЭБАУТ</h1> <a href="/">HOME</a> <p>счетчик просмотров: ' + count.countAbout + '</p>');
})

app.listen(3000);