import express from 'express';
import signupRouter from './routes/user';
import postAD from './routes/cars';


const app = express();
app.use(express.json());

app.use('/', signupRouter);
app.use('/', postAD);

const port = process.env.PORT || 3000 ;
app.listen(port, () => {console.log(`app is listening on ${port}`)});