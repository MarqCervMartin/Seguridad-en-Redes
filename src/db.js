const mongoose = require('mongoose');

mongoose.connect('mongodb://axelbd:AikQsKwPO1wIUqMewJCbfroscgg3tAEzNZtpItRgYkYx0RvG72CygLfrcjsWtrxFlQW2hl7n1s866pXI5sWaIQ==@axelbd.mongo.cosmos.azure.com:10255/?ssl=true&appName=@axelbd@',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db=>console.log('BD esta conectada'))
.catch(err=>console.error(err));
