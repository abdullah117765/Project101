import express from 'express' ;

const app = express();

app.get('/' , function (req , res){

        res.send('Hehe Suiii')

})

app.listen(3001 , () => console.log("server running"))