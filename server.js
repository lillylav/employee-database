const express = require('express');
const apiRoutes = require('./routes/apiRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use modularized code in routes/apiRoutes/index.js to display routes without api
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to listen at the PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});