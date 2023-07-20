const  mongo= require("mongoose")

const CartSchema= new mongo.Schema(
    {
        userId:{type:String,required:true, unique:true},
        products:[
            {
                productId:{
                    type:String,
                },
                quantity:{
                    type:Number,
                    default:1,
                },
            },
        ] ,
    },
    {timestamps:true}
)

module.exports= mongo.model("Cart", CartSchema)