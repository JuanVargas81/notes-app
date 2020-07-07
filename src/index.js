const express = require('express');
const app = express();

// Initializations
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
// Global Variables
// Routes
// Static Files
// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});



