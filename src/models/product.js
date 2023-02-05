const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const product = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: false,
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = model("Product", product);
