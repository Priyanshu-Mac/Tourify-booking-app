const Joi = require("joi");

const listingSchema = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
    price : Joi.number().required().min(0),
    image : Joi.string().allow("", null),
    country : Joi.string().required(),
    location : Joi.string().required(),
});

module.exports = listingSchema;