const express = require('express');
const UserRouter = require('./routers/userRouter');

const app =express();

const port = 5000;

app.use(express.json());
app.use('/user', UserRouter);

app.get('/', (req, res)=>{
    res.send('response from express');    
});
app.get('/add',(res,req)=>{
    res.send('response from add');
});
app.get('/update',(res,req) =>{
    res.send('response from update');
});
app.get('/delete',(res,req)=>{
    res.send('response from delete');
});

app.listen(port, () => {
    console.log('express server has started');
    
});
