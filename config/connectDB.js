const mongoose = require('mongoose');


const DB_URI ='mongodb://localhost:27017/WS_F2'

const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true});
            console.log("DB is Connected")
    } catch (error) {
        console.log(`can not connect to DB ${error}`)
    }
}

module.exports = connectDB