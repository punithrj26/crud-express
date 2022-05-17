const providerModel = require("../model/provider");
const userModel = require("../model/user");
const providerDetailModel = require("../model/providerDetail");


exports.mergeProvider = async (req, res) => {
    try {
        res.send("This is provider Merging");
    } catch (error) {
        res.status(400).send({ message: "Server Error",error });
    }
}

exports.mergeRequest = async (req, res) => {
    try {
        let p1 = req.body.prn1;
        let p2 = req.body.prn2;

        let prn1 = await providerModel.findOne({ prn: p1 });
        let prn2 = await providerModel.findOne({ prn: p2 });
        res.status(200).send({ message: "Providers Featched", prn1,prn2 });

        
    } catch (error) {
        res.status(400).send({ message: "Server Error", error });
    }
}
