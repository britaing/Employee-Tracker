
const connection = require('./config/connection');

const PORT = process.env.PORT || 3001;

connection.mysql();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});