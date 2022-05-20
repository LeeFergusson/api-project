import express from 'express';

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello from NodeJS!');
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
