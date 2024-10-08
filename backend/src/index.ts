import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import animalRouter from './routes/animal';

const app = express();
const port = 5050;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/animal', animalRouter); // Use the animal router

// Connect to MongoDB
mongoose.connect('mongodb://localhost/zoo')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Simple test API
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Zoo API');
});

// Run server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});