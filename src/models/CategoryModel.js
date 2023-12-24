
const  mongoose  = require("mongoose");

const dataSchema = new mongoose.Schema({
    categoryName : {
        type : String,
        required : true
    },
    categoryImg :{
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false})

const categorModel = mongoose.model("categories",dataSchema);

module.exports = categorModel;