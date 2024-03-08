const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbohydrate: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    sodium: {
        type: Number,
        required: true
    },
    fiber: {
        type: Number,
        required: true
    },
    saturatedFat: {
        type: Number,
        required: true
    },
    transFat: {
        type: Number,
        required: true
    },
    monounsaturatedFat: {
        type: Number,
        required: true
    },
    polyunsaturatedFat: {
        type: Number,
        required: true
    }
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;