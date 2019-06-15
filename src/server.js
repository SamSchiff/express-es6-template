import express from 'express';
import api from './api';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'express server with es6' });
});

app.use('/api', api);

app.listen(process.env.PORT || 3000, () => console.log('Listening to port 3000'));
