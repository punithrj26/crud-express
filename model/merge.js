const { Schema, model } = require("mongoose");
const { v4: uuid } = require("uuid");

// let a = "RNO"+uuid().toUpperCase().slice(28);
// console.log(a);
let mergeSchema = new Schema(
{
        requestno: {
        type: String,
        default:"RNO"+uuid().toUpperCase().slice(28)
    },
        provider1: {
        type: String
    },
        provider2: {
            type: String
        },
        requesttype: {
            type: String
        },
        approvalStatus: {
            type: String
        },
        reason: {
            type: String
        },
        date: {
            type: date,
            default:Date.now()
        }
},
{
    timestamps: true,
}
);

module.exports = model("merge", mergeSchema);
