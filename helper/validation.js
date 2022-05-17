const Joi = require("@hapi/joi");

//?Providers Validation

const providersValidation = data => {
    const schema = {
        addressLine1: Joi.string().min(5).max(20).required(),
        addressLine2: Joi.string().min(5).max(20).optional(),
        addressLine3: Joi.string().min(5).max(20).optional(),
        aliasName: Joi.string().optional(),
        childProvider: Joi.string().optional(),
        cityOthers: Joi.string().optional(),
        cityTownVillage: Joi.string().required(),
        country: Joi.string().valid("india").required(),
        district: Joi.string().required(),
        doctorsList: Joi.string().optional(),
        email: Joi.string().email().optional(),
        entityName: Joi.string().optional(),
        externalReferenceNo: Joi.string().alphanum().optional(),
        faxNumber: Joi.number().optional(),
        firstName: Joi.string().optional(),
        flagDetails: Joi.object()
        .keys({
            Gold: Joi.boolean().optional(),
            Platinum: Joi.boolean().optional(),
            Silver: Joi.boolean().optional(),
            Verified: Joi.boolean().optional(),
            nonServiceProvider: Joi.boolean().optional(),
            prn: Joi.string().optional(),
            providerName: Joi.string().optional(),
            providerStatus: Joi.string().optional(),
            remarks: Joi.string().optional(),
            underObservation: Joi.boolean().optional(),
        })
        .optional(),
        gender: Joi.string().valid("Male", "Female").optional(),
        gstin: Joi.string().optional(),
        isNonServiceProvider: Joi.string().optional(),
        lastName: Joi.string().optional(),
        mappingType: Joi.string().optional(),
        middleName: Joi.string().optional(),
        mobileNumber: Joi.number().integer().optional(),
        panNumber: Joi.string().alphanum().optional(),
        pinPostalCode: Joi.number().integer().required(),
        prn: Joi.string().alphanum().required(),
        providerStatusHistory: Joi.string().optional(),
        providerType: Joi.string()
        .valid("Hospital", "Doctor", "Dentist", "Dyacare center")
        .required(),
        providerTypeOther: Joi.string().optional(),
        qualification: Joi.string().valid("MBBS", "BDS").optional(),
        qulificationOther: Joi.string().optional(),
        registeredBody: Joi.string().optional(),
        registeredCouncil: Joi.string().optional(),
        registeredCouncilOther: Joi.string().optional(),
        registeredEntity: Joi.string()
        .valid("Institution", "Individual")
        .required(),
        registrationDate: Joi.date().optional(),
        registrationNumber: Joi.number().integer().required(),
        registrationValidUpto: Joi.string().optional(),
        remarks: Joi.string().optional(),
        rohiniId: Joi.number().optional(),
        salutation: Joi.string().valid("Dr", "Mr", "Mrs", "Ms").optional(),
        servicesProvided: Joi.string().optional(),
        servicesProvidedOther: Joi.string().optional(),
        state: Joi.string().required(),
        status: Joi.string()
        .valid("PRN Generated", "Registered", "Rejected", "Empaneled")
        .required(),
    telephoneNumber: Joi.number().integer().optional(),
    validationDetails: Joi.object().keys({
        dailyMedicalRecords: Joi.string().optional(),
        hasOperationTheatre: Joi.boolean().optional(),
        medicalPractionerRoundTheClock: Joi.string().optional(),
        noOfBeds: Joi.number().integer().optional(),
        nursingRoundTheClock: Joi.string().optional(),
        registrationDateEffectiveFrom: Joi.date().optional(),
        registrationDateEffectiveTo: Joi.date().optional(),
    }),
    };
    return Joi.validate(data, schema);
};

module.exports.providersValidation = providersValidation;


//?user Validation
const usersValidation = data => {
    const schema = {
        active: Joi.boolean().required(),
        approveByCCODate: Joi.date().optional(),
        assignRole: Joi.string().optional(),
        assignSpecialPermission: Joi.string(),
        contact: Joi.boolean().optional(),
        contactMobileNo: Joi.number()
        .integer()
        .when(`contact`, { is: true, then: Joi.required() }),
        email: Joi.string().email().required(),
        emailVerification: Joi.object().keys({
        status: Joi.boolean(),
        }),
        employee: Joi.boolean().optional(),
        employeeId: Joi.string().optional(),
        employeeName: Joi.string().optional(),
        existingRecomendedPayments: Joi.number().integer().optional(),
        existingRecomendedReserving: Joi.number().integer().optional(),
        externalResource: Joi.boolean().optional(),
        faLevel: Joi.string().optional(),
        faLevelId: Joi.string().optional(),
        joiningDate: Joi.date().iso().optional(),
        name: Joi.object().keys({
        first: Joi.string(),
        last: Joi.string(),
        }),
        ntidUserId: Joi.number().optional(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        recomendedFALevel: Joi.string().optional(),
        recomendedFALevelId: Joi.string().optional(),
        recomendedPayments: Joi.number().optional(),
        recomendedReserving: Joi.number().optional(),
        rejectedReason: Joi.string().optional(),
        remark: Joi.string().optional(),
        role: Joi.string()
        .valid(
            "SuperUser",
            "AdminUser",
            "NetworkManager",
            "NetworkExecutive",
            "ProviderManagementTeam",
            "Authorizer",
            "Approver",
            "DEO",
            "Reviewer",
            "normal"
        )
        .required(),
        selectedLOB: Joi.string().valid("Health", "PA").optional(),
        settlingOffice: Joi.boolean().optional(),
        signUptype: Joi.string().valid("manual").required(),
        status: Joi.string().valid("Yes", "No", "Approved", "Pending").optional(),
        typeOfEmployee: Joi.string()
        .valid("FullTime", "PartTime", "External", "ServiceID")
        .optional(),
        userZoneMapping: Joi.object()
        .keys({
            employeeId: Joi.number(),
            fullName: Joi.string().default("new user"),
            ntid: Joi.number(),
            selectedSettlingOffice: Joi.array(),
            settlingOfficeList: Joi.array(),
            updatedBy: Joi.string(),
            zone: Joi.string().valid(
            "MUMBAI",
            "CHENNAI",
            "AHEMADABAD",
            "HYDERABAD",
            "BANGALORE",
            "DELHI"
            ),
            zoneManager: Joi.boolean(),
        })
        .optional(),    
    };

    return Joi.validate(data, schema);
}

module.exports.usersValidation = usersValidation;

//? Providers Details Validation
const providerDetailsValidation = data => {
    const schema = {
        claimRegistrationId: Joi.string().required(),
        createdByUserId: Joi.string().required(),
        hospitalDetails: Joi.object()
        .keys({
            email: Joi.string().email().optional(),
            noOfBeds: Joi.number().min(2).optional(),
            prnHospital: Joi.string().alphanum().required(),
            providerAddress: Joi.string().min(10).max(30).required(),
            providerAliasName: Joi.string().min(3).max(20).optional(),
            providerFlags: Joi.string().optional(),
            providerId: Joi.string().required(),
            providerName: Joi.string().min(3).max(30).required(),
            providerStatus: Joi.string().valid("Empaneled").required(),
            providerType: Joi.string()
                .valid("Hospital", "Ambulance", "Dental", "Telehealth Provider")
                .required(),
            registrationValidUpto: Joi.date().required(),
            rohiniCode: Joi.string().default("null").optional(),
            telephoneNumber: Joi.number().optional(),
        })
            .optional(),
        treatingDoctor: Joi.object()
            .keys({
            firstName: Joi.string().min(2).max(20).optional(),
            flagDetails: Joi.array().default([""]).optional(),
            isNonServiceProvider: Joi.boolean().optional(),
            lastName: Joi.string().min(2).max(20).optional(),
            middleName: Joi.string().min(2).max(20).optional(),
            phoneNumber: Joi.number().optional(),
            prnDoctor: Joi.string().alphanum().optional(),
            providerId: Joi.string().alphanum().optional(),
            qualification: Joi.string()
                .valid("MBBS", "BAMS", "TPA coordinator")
                .optional(),
            qulificationOther: Joi.string().optional(),
            registeredCouncil: Joi.string().optional(),
            registrationNumber: Joi.string().optional(),
            status: Joi.string().valid("Empaneled", "Registered").optional(),
        })
        .optional(),
        updatedByUserId: Joi.string().required(),
    };
    return Joi.validate(data, schema);
}

module.exports.providerDetailsValidation = providerDetailsValidation;