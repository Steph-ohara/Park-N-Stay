const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 5001

const app = express();

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
});