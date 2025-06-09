// Modules/dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Config Functions
import connectDB from "./config/mongodb.config.js";

// Controllers
import { redirectToOriginalURL } from "./src/controllers/shorturl.controller.js";

// Routes
import ShortURLRouter from "./src/routes/shorturl.routes.js";

dotenv.config("./.env"); // .env config

const app = express();  // express app initialization
const PORT = process.env.PORT;  // initialized PORT for server

// Middlewares
app.use(cors({
    origins: process.env.NODE_ENV === 'development' ? process.env.ALLOWED_DEV_ORIGIN : process.env.ALLOWED_PROD_ORIGIN
}));
app.use(express.json()); // to read request data in the form of json
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/url', ShortURLRouter);

// Route used only for redirection purpose
app.get('/:id', redirectToOriginalURL);

// Connecting to Database, if successful only then starting the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((error) => console.log(error.message));

