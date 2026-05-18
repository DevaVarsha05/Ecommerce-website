const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/vegefoods')
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

const seedDB = async () => {
    const sampleProducts = [
        { 
          name: "Tomato", 
          price: 80, 
          image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg" 
        },
        { 
          name: "Strawberry", 
          price: 150, 
          image: "https://images.pexels.com/photos/70746/strawberries-fruit-red-sweet-70746.jpeg" 
        }
    ];
    await Product.deleteMany({}); // Idhu dhaan duplicate-a prevent pannum
    await Product.insertMany(sampleProducts);
    console.log("Database Seeded!");
};

seedDB();

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.listen(5000, () => console.log("Server running on port 5000"));
