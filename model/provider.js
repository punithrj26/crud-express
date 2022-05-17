const { Schema, model } = require("mongoose");

let providerSchema = new Schema(
{
    addressLine1: { type: String },
    addressLine2: { type: String },
    aliasName: { type: String },
    cityTownVillage: { type: String },
    country: { type: String },
    createdAt: { type: Date, default: Date.now() },
    district: { type: String },
    email: { type: String },
    entityName: { type: String },
    faxNumber: { type: String },
    panNumber: { type: String },
    pinPostalCode: { type: String },
    prn: { type: String },
    providerStatusHistory: { type: String },
    providerType: { type: String },
    registeredBody: { type: String },
    registeredEntity: { type: String },
    registrationNumber: { type: String },
    rohiniId: { type: String },
    servicesProvided: { type: String },
    state: { type: String },
    status: { type: String },
    telephoneNumber: { type: String },
    updatedAt: { type: Date, default: Date.now() },
},
{
    timestamps: true,
}
);

module.exports = model("provider", providerSchema);