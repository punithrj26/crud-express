const { Schema, model } = require("mongoose");

const providerDetailSchema = new Schema(
    {
        claimRegistrationId: {
            type: String,
        },
        createdByUserId: {
            type: String,
        },
        hospitalDetails: {
            email: String,
            noOfBeds: Number,
            prnHospital: String,
            providerAddress: String,
            providerAliasName: String,
            providerFlags: String,
            providerId: String,
            providerName: String,
            providerStatus: String,
            providerType: String,
            registrationValidUpto: Date,
            rohiniCode: String,
            telephoneNumber: Number,
        },
        treatingDoctor: {
            firstName: String,
            flagDetails: Array,
            isNonServiceProvider: Boolean,
            lastName: String,
            middleName: String,
            phoneNumber: Number,
            prnDoctor: String,
            providerId: String,
            qualification: String,
            qulificationOther: String,
            registeredCouncil: String,
            registrationNumber: String,
            status: String,
        },
        updatedByUserId: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("providerdetail", providerDetailSchema);
