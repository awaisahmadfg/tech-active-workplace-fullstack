const express = require('express');
const transactionsRouter = require('./routes/transactions');

const app = express();

app.use(express.json());
app.use('/transactions', transactionsRouter);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = { app, server };
