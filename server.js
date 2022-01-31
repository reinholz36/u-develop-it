const fs = require('fs');
const path = require('path');
const express = require('express');



const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


// Default response for any other request (Not Found) Always place at end of list for app.use as it will overide 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
 console.log(`API server on port ${PORT}!`);
});
