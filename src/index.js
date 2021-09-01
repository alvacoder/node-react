import express from "express";

const app = express();
const port = process.env.PORT || 7001;


app.listen(port, () => {
    console.log('app running on port %s', port);
});