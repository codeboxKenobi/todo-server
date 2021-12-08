import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const port = 5000;
const db_url = `mongodb+srv://client:12345@cluster0.13skf.mongodb.net/todoDatabase?retryWrites=true&w=majority`

const app = express();

app.use(function(req, res, next) {
    try {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    } catch (e) {
        console.log(e);
    }
})

app.use(express.json());
app.use('/api', router);

async function startServer() {
    try {

        await mongoose.connect(db_url, {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            
        })
        app.listen(port, () => {
            console.log(`SERVER STARTED ON PORT: ${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}

startServer()