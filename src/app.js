import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import clientesRouter from './routes/clientes.js';
import produtosRouter from './routes/produtos.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/', (req, res) => res.send('OK'));

export default app;
