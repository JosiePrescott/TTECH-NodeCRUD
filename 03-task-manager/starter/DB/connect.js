const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://josieprescott65_db_user:98yPN41RxCWfkTEc@nodeexpressproject.y3mqyyi.mongodb.net/?appName=NodeExpressProject'



mongoose
    .connect(connectionString)
    .then(()=>console.log('connected to the db...'))
    .catch((err)=> console.log(err));
