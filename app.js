import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello',(req,res)=>{
        res.send('Hello World');
});

async function start() {
        try {
            await app.listen(port);
            console.log(`I'm Connected to Port :${port}`);
        } catch (err) {
            console.error(err);
        }
}


app.listen(port, () =>
  console.log(`Example app listening on port ${port} !`),
);