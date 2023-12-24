
const  mongoose  = require("mongoose");

const dataSchema = new mongoose.Schema({
    categoryName : {
        type : String,
        required : true,
        unique : true
    },
    categoryImg :{
        type : String,
        required : true,
        unique : true
    }
},{timestamps:true,versionKey:false})

const categorModel = mongoose.model("categories",dataSchema);

module.exports = categorModel;