 const mongoose = require('mongoose');

const conncetDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL, {
   

         })
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err)
    }
}


module.exports = conncetDB;