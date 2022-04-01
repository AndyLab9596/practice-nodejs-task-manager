const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [20, 'name cannot be more than 20 characters '],
        required: [true, 'name must be provided'],
        trim: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)