var express = require("express");
const product = require("../models/product");

var router = express.Router();

//create products
router.post("/", async (req, res) => {
	try {
		const newProduct = product(req.body);
		let response = await newProduct.save();
		res.status(201).send(response);
	} catch (error) {
		res.status(409).send({ error: error.message });
	}
});

//get all products or one product
router.get("/", async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			if (id) {
				let response = await product.findById(id);
				res.status(200).send(response);
			}
		} catch (error) {
			res.status(400).send({ error: error.message });
		}
	}

	try {
		let response = await product.find();
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

//update a product
router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, description, price } = req.body;
	try {
		let response = await product.updateOne(
			{ _id: id },
			{ $set: { name, description, price } }
		);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

//remove
router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		let response = await product.findByIdAndDelete(id);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;
