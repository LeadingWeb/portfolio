const express = require('express');

const app = express();

const PORT = 5010;

const server = app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

