import express from 'express';
import signupRouter from './routes/user';


const app = express();
app.use(express.json());

app.use('/', signupRouter)

const port = process.env.PORT || 3000 ;
app.listen(port, () => {console.log(`app is listening on ${port}`)});