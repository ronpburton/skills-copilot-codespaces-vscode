// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Comments data
let comments = [
    { id: 1, author: 'Alice', content: 'Great post!', likes: 0 },
    { id: 2, author: 'Bob', content: 'Thanks for sharing!', likes: 0 },
];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,