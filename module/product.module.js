const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required :[true, "please enter name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required : true,
        default: 0
    },

    color: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: false,
    },
},
{
    Timestamp: true,
}
)

const Product = mongoose.model("product", ProductSchema)
module.exports = Product
