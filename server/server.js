import express from 'express';
import user_router from './routes/user';
import postAD from './routes/cars';


const app = express();
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(user_router);
app.use('/', postAD);

const port = process.env.PORT || 3000 ;
app.listen(port, () => {console.log(`app is listening on ${port}`)});