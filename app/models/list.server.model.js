'use strict';

/**
 * EVERY LIST HAS MANY TASKS
 * /


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Task Schema
 *
 * Every List has many tasks
 */
var TaskSchema = new Schema({
    name: {
        type: String,
        default: '',
//        required: 'Please fill Task name',  // todo add validations back
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    startDate: {
        type: Date,
        default: ''
    },
    dueDate: {
        type: Date
    },
    status: {  // Whether or not the task is completed.  False means it hasn't been done yet.
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Task', TaskSchema);

/**
 * List Schema
 */
var ListSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill List name',
		trim: true
	},

    tasks: [TaskSchema],

    created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('List', ListSchema);