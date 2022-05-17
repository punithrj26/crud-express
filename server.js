const express = require("express");
const morgan = require("morgan");
require("dotenv/config");
const { connectDB } = require("./config/db");
const providerRoutes = require("./routes/providers")
const providerDetailRoutes = require("./routes/providerDetails");
const userRoutes = require("./routes/users");
const mergeRoutes = require("./routes/merges")
const app = express();

let startServer = () => {
    //? DataBase Connection
    connectDB();

    //?Middleware section
    if (process.env.NODE_ENV == "development") {
        app.use(morgan("dev"));
    }
    app.use(express.json());

    //? Routes loading
    app.use('/provider', providerRoutes);
    app.use('/provider-details', providerDetailRoutes);
    app.use("/user", userRoutes);
    //? merging/demerging routes
    app.use("/provider-merge-demerge",mergeRoutes)

    //? litsen port
    const port = process.env.PORT;
    app.listen(port, _ => console.log(`Server running on port no : ${port}`));
}
startServer();
