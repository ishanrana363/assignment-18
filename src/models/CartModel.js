// productID, userID, color, price, qty, size

const mongoose  = require("mongoose");

const dataSchema = new mongoose.Schema({
    productID:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        unique : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        unique : true
    },
    color : {
        type:String,
        required : true
    },
    qty : {
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});

const cartModel = mongoose.model("carts",dataSchema);

module.exports = cartModel;