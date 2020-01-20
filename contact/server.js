const express = require('express');

const app = express();

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.get('/', (req, res) => res.json({ msg: 'Welcome' }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
