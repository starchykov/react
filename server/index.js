const app = require('./app');
const port = process.env.PORT || 3010

//server listening
app.listen(port, () => console.log(`Server is working on port ${port}`)
);