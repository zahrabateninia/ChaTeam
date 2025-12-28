import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from "path";
import { connectDB }from "./lib/db.js"
// Load environment variables 
dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json)

// Middleware
app.use(express.json()); // req.body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Deployment configuration
if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  connectDB()
});
