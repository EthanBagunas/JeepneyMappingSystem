const express = require('express')
const app = express()   
const cors = require('cors')
const port = 3000

const dbService= require('./database')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended :false }));



app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchCode(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})




app.listen(port, ()=> {

console.log("PORT IS RUNNING !!!")    
})