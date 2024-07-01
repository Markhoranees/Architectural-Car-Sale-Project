import express from 'express';
import cors from 'cors';
import router from './routes/carRoutes.js';
import mongoose from 'mongoose';
import helmet from "helmet"

const PORT = 8000;
const app = express();

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://aneeskhann:aneeskhan@cluster0.r7cpqch.mongodb.net/cars?retryWrites=true&w=majority", { 
      serverApi: { version: '1', strict: true, deprecationErrors: true } 
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
connect();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Car Service API');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
