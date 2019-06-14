import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.status(200).json({message: "express server with es6"});
});

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));
