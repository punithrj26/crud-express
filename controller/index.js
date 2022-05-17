const providerSchemas = require("../model/provider");
const userSchemas = require("../model/user");
const providerDetailSchemas = require("../model/providerDetail")
const { providerDetailsValidation, providersValidation, usersValidation } = require("../helper/validation");

// !==============================================================================================
//? Provider Controller

exports.getAllProvider =async (req, res) => {
    try{
        let providerDetail = await providerSchemas.find({}).limit(20);        
        res.status(200).send({ message: "All Providers Featched", providerDetail });
    } catch (error) {
        res.status(400).send({message:"Server Error"})
    }
}

exports.createProvider =async (req, res) => {
    try {
        const { error  } = providersValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const prov = new providerSchemas({
            addressLine1:req.body.addressLine1,
            addressLine2:req.body.addressLine2,
            aliasName:req.body.aliasName,
            cityTownVillage:req.body.cityTownVillage,
            country:req.body.country,
            district:req.body.district,
            email:req.body.email,
            entityName:req.body.entityName,
            faxNumber:req.body.faxNumber,
            panNumber:req.body.panNumber,
            pinPostalCode:req.body.pinPostalCode,
            prn:req.body.prn,
            providerStatusHistory:req.body.providerStatusHistory,
            providerType:req.body.providerType,
            registeredBody:req.body.registeredBody,
            registeredEntity:req.body.registeredEntity,
            registrationNumber:req.body.registrationNumber,
            rohiniId:req.body.rohiniId,
            servicesProvided:req.body.servicesProvided,
            state:req.body.state,
            status:req.body.status,
            telephoneNumber:req.body.telephoneNumber
        })

        try {
            const saveProvider = await prov.save();
            // let gotData = await providerSchema.create(prov);
            res.status(200).send({ message: "Provider Successfully Created", saveProvider });

        } catch (error) {
            res.status(400).send(error);
        }

        
    } catch (error) {
        res.status(400).send({message:"Server Error",error})
    }
}

exports.deleteProvider =async (req, res) => {
    try {
        let gotData = await providerSchemas.findOneAndDelete({_id:req.params.id});
        res.status(200).send({ message: "Deleted Provider Successfully", gotData });
    } catch (error) {
        res.status(400).send({message:"Server Error",error})
    }
}

exports.updateProvider =async (req, res) => {
    try {
        let gotData = await providerSchemas.findByIdAndUpdate({_id:req.params.id});
        res.status(200).send({ message: "Updated providers details successfully", gotData });
    } catch (error) {
        res.status(400).send({message:"Server Error",error})
    }
}


// !=============================================================================================
//? User Controller

exports.getAllUser = async (req, res) => {
    try{
        let userDetail = await userSchemas.find({}).limit(20);        
        res.status(200).send({ message: "All Providers Featched", userDetail });
    } catch (error) {
        res.status(400).send({message:"Server Error"})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let gotData = await userSchemas.findOneAndDelete({_id:req.params.id});
        res.status(200).send({ message: "Deleted User Successfully", gotData });
    } catch (error) {
        res.status(400).send({message:"Server Error",error})
    }
}

exports.createUser = async (req, res) => {
    try {
        const { error } = usersValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let userdata = new userSchemas({
            active: req.body.active,
            approveByCCODate: req.body.approveByCCODate,
            assignRole: req.body.assignRole,
            assignSpecialPermission: req.body.assignSpecialPermission,
            contact: req.body.contact,
            contactMobileNo: req.body.contactMobileNo,
            email: req.body.email,
            emailVerification: req.body.emailVerification,
            status: req.body.status,
            employee: req.body.employee,
            employeeId: req.body.employeeId,
            employeeName: req.body.employeeName,
            existingRecomendedPayments: req.body.existingRecomendedPayments,
            existingRecomendedReserving: req.body.existingRecomendedReserving,
            externalResource: req.body.externalResource,
            faLevel: req.body.faLevel,
            faLevelId: req.body.faLevelId,
            joiningDate: req.body.joiningDate,
            name: req.body.name,
            ntidUserId: req.body.ntidUserId,
            password: req.body.password,
            recomendedFALevel: req.body.recomendedFALevel,
            recomendedFALevelId: req.body.recomendedFALevelId,
            recomendedPayments: req.body.recomendedPayments,
            recomendedReserving: req.body.recomendedReserving,
            rejectedReason: req.body.rejectedReason,
            remark: req.body.remark,
            role: req.body.role,
            selectedLOB: req.body.selectedLOB,
            settlingOffice: req.body.settlingOffice,
            signUptype: req.body.signUptype,
            status: req.body.status,
            typeOfEmployee: req.body.typeOfEmployee,
            userZoneMapping: req.body.userZoneMapping,
        });
        try {
            const saveUser = await userdata.save();
            res.status(200).send({ message: "User Successfully Created", saveUser });

        } catch (error) {
            res.status(400).send(error);
        }

    } catch (error) {
        res.status(400).send({ message: "Server Error", error });
    }
}


// !==============================================================================================
//? Provider Details Controller

exports.getAllProviderDetail =async (req, res) => {
    try{
        let providerDetail = await providerDetailSchemas.find({}).limit(20);        
        res.status(200).send({ message: "All Providers Featched", providerDetail });
    } catch (error) {
        res.status(400).send({message:"Server Error"})
    }
}

exports.deleteProviderDetail =async (req, res) => {
    try {
        let gotData = await providerDetailSchemas.findOneAndDelete({_id:req.params.id});
        res.status(200).send({ message: "Deleted Provider Details Successfully", gotData });
    } catch (error) {
        res.status(400).send({message:"Server Error",error})
    }
}

exports.createProviderDetail = async (req, res) => {
    try {
        const { error } = providerDetailsValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let providerDetaildata = new userSchemas({
            claimRegistrationId: req.body.claimRegistrationId,
            createdByUserId: req.body.createdByUserId,
            hospitalDetails: req.body.hospitalDetails,
            treatingDoctor: req.body.treatingDoctor,
            updatedByUserId: req.body.updatedByUserId,
        });
        try {
            const saveProviderDetails = await providerDetaildata.save();
            res.status(200).send({ message: "Provider Details Successfully Created", saveProviderDetails });

        } catch (error) {
            res.status(400).send(error);
        }

    } catch (error) {
        res.status(400).send({ message: "Server Error", error });
    }
}