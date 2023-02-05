const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const products = require("./routes/products");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/products", products);

//db connect
mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to DB!"))
	.catch((e) => console.log(e.message));

app.get("/", (req, res) => {
	res.status(200).send({ text: "Welcome to my API" });
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
