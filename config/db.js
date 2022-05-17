const {connect} = require("mongoose");
require("dotenv/config")

exports.connectDB = async () => {
    try {
        const db = process.env.DB;
        await connect(db);
        console.log("Connected to DataBase");
    } catch (error) {
        return error
    }
};
