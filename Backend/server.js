import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/VolunteersRoutes.js'
import dotenv from 'dotenv';
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Add this line to enable CORS for all routes
app.use(express.json());
app.use('/auth', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
