import express from 'express';
import user_router from './routes/user';
import postAD from './routes/cars';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerDocument from '../swagger.json';

const app = express();
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(user_router);
app.use('/', postAD);

const port = process.env.PORT || 3000 ;
app.use('/apis-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {console.log(`app is listening on ${port}`)});

export default app;
