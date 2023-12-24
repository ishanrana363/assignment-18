const mongoose  = require("mongoose");

const dataSchema = new mongoose.Schema({
    brandName : {
        type : String,
        required : true
    },
    brandImg : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false})

const brandModel = mongoose.model("brands",dataSchema);

module.exports = brandModel;