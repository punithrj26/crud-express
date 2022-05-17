const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const UsersSchema = new Schema(
{
    active: {
        type: Boolean,
    },
    approveByCCODate: {
        type: Date,
    },
    assignRole: {
        type: String,
    },
    assignSpecialPermission: {
        type: String,
    },
    contact: {
        type: Boolean,
    },
    contactMobileNo: {
        type: Number,
    },
    email: {
        type: String,
    },
    emailVerification: {
        status: String,
    },
    employee: {
        type: Boolean,
    },
    employeeId: {
        type: String,
    },
    employeeName: {
        type: String,
    },
    existingRecomendedPayments: {
        type: Number,
    },

    existingRecomendedReserving: {
        type: Number,
    },
    externalResource: {
        type: Boolean,
    },
    faLevel: {
        type: String,
    },
    faLevelId: {
        type: String,
    },
    joiningDate: {
        type: Date,
    },
    name: {
        first: String,
        last: String,
    },
    ntidUserId: {
        type: Number,
    },
    password: {
        type: String,
    },

    recomendedFALevel: {
        type: String,
    },
    recomendedFALevelId: {
        type: String,
    },
    recomendedPayments: {
        type: Number,
    },
    recomendedReserving: {
        type: Number,
    },
    rejectedReason: {
        type: String,
    },

    remark: {
        type: String,
    },
    role: {
        type: String,
    },

    selectedLOB: {
        type: String,
    },

    settlingOffice: {
        type: Boolean,
    },
    signUptype: {
        type: String,
    },
    status: {
        type: String,
    },
    typeOfEmployee: {
        type: String,
    },
    userZoneMapping: {
        employeeId: Number,
        fullName: String,
        ntid: Number,
        selectedSettlingOffice: Array,
        settlingOfficeList: Array,
        updatedBy: String,
        zone: String,
        zoneManager: Boolean,
    },
},
{
    timestamps: true,
}
);

UsersSchema.pre("save", async function () {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model("user", UsersSchema);
