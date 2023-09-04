const mongoose = require("mongoose");
const UserdetailsSchma = new mongoose.Schema(
    {
        fname:String,
        email:{type:String,unique:true},
        pass:String,
        // phone:String
    },
    {
        collection:"userinfo"
    }
);
 const userdata = mongoose.model("userinfo", UserdetailsSchma)
module.export = userdata;