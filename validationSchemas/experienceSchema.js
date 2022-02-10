const Joi = require('joi');


const experienceSchema = Joi.object({
    experienceName: Joi
        .string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'any.required': 'Experience name is required',
            'string.empty': 'Experience name  can not be empty',
            'string.min': 'Experience name is should be between 3 and 50 characters',
            'string.max': 'Experience name is  should be between 3 and 50 characters'
        }),

    photo: Joi
        .string()
        .min(3)
        .max(150)
        .required()
        .messages({
            'any.required': 'Experience photo is required',
            'string.empty': 'Experience photo  can not be empty',
            'string.min': 'Experience photo is should be between 3 and 150 characters',
            'string.max': 'Experience photo is  should be between 3 and 150 characters'
    }),

    experienceDescription: Joi
        .string()
        .min(3)
        .max(500)
        .required()
        .messages({
            'any.required': 'Experience description is required',
            'string.empty': 'Experience description can not be empty',
            'string.min': 'Experience description is should be between 3 and 500 characters',
            'string.max': 'Experience description is  should be between 3 and 500 characters'
    }),

    price: Joi
        .number()
        .integer()
        .required()
        .messages({
            'any.required': 'price is required',
            'number.base': 'The value of price is not a number or could not be cast to a number',
            'number.integer': 'The number is not a valid integer.',

    }),

    totalSeats: Joi
        .number()
        .integer()
        .min(0)
        .max(20)
        .required()
        .messages({
            'any.required': 'place_id is required',
            'number.base': 'The value of place_id is not a number or could not be cast to a number',
            'number.integer': 'The number is not a valid integer.',
            'number.min': 'totalSeats is should be between 0 and 100 characters',
            'number.max': 'totalSeats is  should be between 0 and 100 characters'
    }),

    experienceDate: Joi
        .date()
        .iso()
        .required()
        .messages({
            'any.required': 'experienceDate is required',
            'string.isoDate': 'experienceDate must be a valid an ISO 8601 date',
            'date.base': 'The value is either not a date or could not be cast to a date from a string or a number.',
            'date.format': 'The date does not match the required format.'
    }),

    experienceHour: Joi
        .string()
        .required()
        .regex(/^([0-9]{2})\:([0-9]{2})$/)
        .messages({
            'any.required': 'experienceHour is required'
    }),

    place_id: Joi
        .number()
        .integer()
        .min(0)
        .max(100)
        .required()
        .messages({
            'any.required': 'place_id is required',
            'number.base': 'The value of place_id is not a number or could not be cast to a number',
            'number.integer': 'The number is not a valid integer.',
            'number.min': 'totalSeats is should be between 0 and 100 characters',
            'number.max': 'totalSeats is  should be between 0 and 100 characters'
    }),
    experienceHour: Joi
        .string()
        .required()
        .regex(/^([0-9]{2}):([0-9]{2})$/)
        .messages({
            'any.required': 'experienceHour is required'
    })
})


module.exports = experienceSchema