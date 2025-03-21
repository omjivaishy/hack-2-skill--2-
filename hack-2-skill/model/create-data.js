const mongoose=require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userschema=mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    mobile:Number,
    state:String,
    district:String,
    password:String,
    gender:String,
    dob:String,
    createdAt: { type: String, default: () => new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata' // Change as per your timezone
    }) }
})

module.exports=mongoose.model("user",userschema);